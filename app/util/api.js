import { format } from 'date-fns';
import React, { useState } from 'react';

const SAMPLE_RATES = {
    // AUD: 1.6164,
    AUD: {
        EUR: 0.65,
        AUD: 1,
        BGN: 1.24,
        BRL: 3.28,
        CAD: 0.87,
        CHF: 0.63,
        CNY: 4.60,
        CZK: 15.78,
        DKK: 4.79,
        GBP: 0.56,
        HKD: 4.99,
        HRK: 4.86,
        HUF: 265.36,
        IDR: 9876.21,
        ILS: 2.27,
        INR: 52.47,
        ISK: 91.61,
        JPY: 94.22,
        KRW: 911.49,
        MXN: 12.66,
        MYR: 9.77,
        NOK: 6.85,
        NZD: 1.11,
        PHP: 37.43,
        PLN: 3.08,
        RON: 3.17,
        RUB: 39.19,
        SEK: 7.12,
        SGD: 0.90,
        THB: 24.18,
        TRY: 11.82,
        USD: 0.64,
        ZAR: 11.50,
    },
    BGN: 1.9558,
    BGN: {
        EUR: 0.51,
        AUD: 0.79,
        BGN: 1,
        BRL: 2.60,
        CAD: 0.69,
        CHF: 0.50,
        CNY: 3.65,
        CZK: 12.52,
        DKK: 3.80,
        GBP: 0.45,
        HKD: 3.96,
        HRK: 3.85,
        HUF: 209.40,
        IDR: 7833.63,
        ILS: 1.80,
        INR: 41.62,
        ISK: 72.66,
        JPY: 74.47,
        KRW: 720.54,
        MXN: 10.04,
        MYR: 2.39,
        NOK: 5.44,
        NZD: 0.88,
        PHP: 29.68,
        PLN: 2.44,
        RON: 2.51,
        RUB: 31.08,
        SEK: 5.65,
        SGD: 0.7,
        THB: 19.18,
        TRY: 9.38,
        USD: 0.50,
        ZAR: 9.12,
    },
    // BRL: 4.7918,
    BRL: {
        EUR: 0.20,
        AUD: 0.31,
        BGN: 0.38,
        BRL: 1,
        CAD: 15.99,
        CHF: 0.19,
        CNY: 1.40,
        CZK: 4.81,
        DKK: 1.46,
        GBP: 0.17,
        HKD: 1.52,
        HRK: 1.48,
        HUF: 80.47,
        IDR: 3010.33,
        ILS: 0.69,
        INR: 15.99,
        ISK: 27.92,
        JPY: 28.62,
        KRW: 277.02,
        MXN: 2.86,
        MYR: 0.92,
        NOK: 2.09,
        NZD: 0.34,
        PHP: 11.41,
        PLN: 0.94,
        RON: 0.97,
        RUB: 11.94,
        SEK: 2.17,
        SGD: 0.27,
        THB: 7.37,
        TRY: 3.56,
        USD: 0.19,
        ZAR: 3.50,
    },
    // CAD: 1.5338,
    CAD: {
        EUR: 0.74,
        AUD: 1.15,
        BGN: 1.45,
        BRL: 3.78,
        CAD: 1,
        CHF: 0.73,
        CNY: 5.31,
        CZK: 18.20,
        DKK: 5.53,
        GBP: 0.65,
        HKD: 5.76,
        HRK: 5.60,
        HUF: 304.50,
        IDR: 11391.38,
        ILS: 2.61,
        INR: 60.52,
        ISK: 105.66,
        JPY: 108.29,
        KRW: 1047.78,
        MXN: 14.61,
        MYR: 3.47,
        NOK: 7.90,
        NZD: 1.28,
        PHP: 43.17,
        PLN: 3.55,
        RON: 3.65,
        RUB: 45.20,
        SEK: 8.21,
        SGD: 1.04,
        THB: 27.89,
        TRY: 13.63,
        USD: 0.73,
        ZAR: 13.26,
    },
    // CHF: 1.1275,
    CHF: {
        EUR: 1.02,
        AUD: 1.57,
        BGN: 1.99,
        BRL: 5.17,
        CAD: 1.37,
        CHF: 1,
        CNY: 7.26,
        CZK: 24.87,
        DKK: 7.56,
        GBP: 0.89,
        HKD: 7.87,
        HRK: 7.66,
        HUF: 416.24,
        IDR: 15571.35,
        ILS: 3.57,
        INR: 82.72,
        ISK: 144.44,
        JPY: 148.02,
        KRW: 1432.25,
        MXN: 19.96,
        MYR: 4.75,
        NOK: 10.80,
        NZD: 1.74,
        PHP: 59.00,
        PLN: 4.86,
        RON: 5.00,
        RUB: 61.81,
        SEK: 11.22,
        SGD: 1.42,
        THB: 38.12,
        TRY: 18.64,
        USD: 1.00,
        ZAR: 18.14,
    },
    // CNY: 7.9451,
    CNY: {
        EUR: 0.14,
        AUD: 0.22,
        BGN: 0.27,
        BRL: 0.71,
        CAD: 0.19,
        CHF: 0.14,
        CNY: 1,
        CZK: 3.43,
        DKK: 1.04,
        GBP: 0.12,
        HKD: 1.08,
        HRK: 1.06,
        HUF: 57.34,
        IDR: 2144.90,
        ILS: 0.49,
        INR: 11.39,
        ISK: 0.14,
        JPY: 20.39,
        KRW: 197.29,
        MXN: 2.75,
        MYR: 0.65,
        NOK: 1.49,
        NZD: 0.24,
        PHP: 8.13,
        PLN: 0.67,
        RON: 0.69,
        RUB: 8.51,
        SEK: 1.55,
        SGD: 0.20,
        THB: 5.25,
        TRY: 2.57,
        USD: 0.14,
        ZAR: 2.50,
    },
    // CZK: 25.715,
    CZK: {
        EUR: 0.041,
        AUD: 0.063,
        BGN: 0.080,
        BRL: 0.21,
        CAD: 0.55,
        CHF: 0.040,
        CNY: 0.29,
        CZK: 1,
        DKK: 0.30,
        GBP: 0.036,
        HKD: 0.32,
        HRK: 0.31,
        HUF: 16.73,
        IDR: 625.82,
        ILS: 0.14,
        INR: 3.32,
        ISK: 5.80,
        JPY: 5.95,
        KRW: 57.56,
        MXN: 0.80,
        MYR: 0.19,
        NOK: 0.43,
        NZD: 0.070,
        PHP: 2.37,
        PLN: 0.20,
        RON: 0.20,
        RUB: 2.48,
        SEK: 0.45,
        SGD: 0.057,
        THB: 1.53,
        TRY: 0.75,
        USD: 0.040,
        ZAR: 0.73,
    },
    // DKK: 7.4567,
    DKK: {
        EUR: 0.13,
        AUD: 0.21,
        BGN: 0.26,
        BRL: 0.68,
        CAD: 0.18,
        CHF: 0.13,
        CNY: 0.96,
        CZK: 3.29,
        DKK: 1,
        GBP: 0.12,
        HKD: 1.04,
        HRK: 1.01,
        HUF: 55.06,
        IDR: 2059.91,
        ILS: 0.47,
        INR: 10.94,
        ISK: 19.10,
        JPY: 19.58,
        KRW: 189.47,
        MXN: 2.64,
        MYR: 0.63,
        NOK: 1.43,
        NZD: 0.23,
        PHP: 7.81,
        PLN: 0.64,
        RON: 0.66,
        RUB: 8.17,
        SEK: 1.48,
        SGD: 0.19,
        THB: 5.04,
        TRY: 2.47,
        USD: 0.13,
        ZAR: 2.40,
    },
    EUR: {
        EUR: 1,
        AUD: 1.55,
        BGN: 1.95,
        BRL: 5.09,
        CAD: 1.35,
        CHF: 0.98,
        CNY: 7.14,
        CZK: 24.47,
        DKK: 7.44,
        GBP: 0.87,
        HKD: 7.74,
        HRK: 7.53,
        HUF: 416.56,
        IDR: 15321.93,
        ILS: 3.51,
        INR: 81.37,
        ISK: 142.05,
        JPY: 145.62,
        KRW: 1408.81,
        MXN: 19.64,
        MYR: 4.67,
        NOK: 10.67,
        NZD: 1.71,
        PHP: 58.04,
        PLN: 4.78,
        RON: 4.91,
        RUB: 60.77,
        SEK: 11.05,
        SGD: 1.40,
        THB: 37.49,
        TRY: 18.33,
        USD: 0.99,
        ZAR: 17.84,
    },
    // GBP: 0.89824,
    GBP: {
        EUR: 1.15,
        AUD: 1.76,
        BGN: 2.24,
        BRL: 5.84,
        CAD: 1.53,
        CHF: 1.13,
        CNY: 8.19,
        CZK: 28.07,
        DKK: 8.53,
        GBP: 1,
        HKD: 8.87,
        HRK: 8.64,
        HUF: 469.50,
        IDR: 17564.01,
        ILS: 4.03,
        INR: 93.31,
        ISK: 162.90,
        JPY: 166.12,
        KRW: 1615.56,
        MXN: 22.52,
        MYR: 5.36,
        NOK: 12.19,
        NZD: 1.97,
        PHP: 66.56,
        PLN: 5.48,
        RON: 5.63,
        RUB: 69.69,
        SEK: 12.66,
        SGD: 1.60,
        THB: 43.00,
        TRY: 21.02,
        USD: 1.13,
        ZAR: 20.45,
    },
    // HKD: 9.1324,
    HKD: {
        EUR: 0.13,
        AUD: 0.20,
        BGN: 0.25,
        BRL: 0.66,
        CAD: 0.17,
        CHF: 0.13,
        CNY: 0.92,
        CZK: 3.16,
        DKK: 0.96,
        GBP: 0.11,
        HKD: 1,
        HRK: 0.97,
        HUF: 52.91,
        IDR: 1979.30,
        ILS: 0.45,
        INR: 10.52,
        ISK: 18.36,
        JPY: 18.52,
        KRW: 182.06,
        MXN: 2.54,
        MYR: 0.60,
        NOK: 1.37,
        NZD: 0.22,
        PHP: 7.50,
        PLN: 0.63,
        RON: 0.63,
        RUB: 7.85,
        SEK: 1.43,
        SGD: 0.18,
        THB: 4.85,
        TRY: 2.37,
        USD: 0.13,
        ZAR: 2.30,
    },
    // HRK: 7.4341,
    HRK: {
        EUR: 0.13,
        AUD: 0.21,
        BGN: 0.26,
        BRL: 0.68,
        CAD: 0.18,
        CHF: 0.13,
        CNY: 0.95,
        CZK: 3.25,
        DKK: 0.99,
        GBP: 0.12,
        HKD: 1.03,
        HRK: 1,
        HUF: 54.38,
        IDR: 2034.20,
        ILS: 0.47,
        INR: 10.81,
        ISK: 18.87,
        JPY: 19.34,
        KRW: 187.11,
        MXN: 2.61,
        MYR: 0.62,
        NOK: 1.41,
        NZD: 0.23,
        PHP: 7.31,
        PLN: 0.63,
        RON: 0.65,
        RUB: 8.07,
        SEK: 1.47,
        SGD: 0.19,
        THB: 4.98,
        TRY: 2.43,
        USD: 0.13,
        ZAR: 2.37,
    },
    // HUF: 326.49,
    HUF: {
        EUR: 0.0024,
        AUD: 0.0038,
        BGN: 0.0048,
        BRL: 0.012,
        CAD: 0.033,
        CHF: 0.024,
        CNY: 0.017,
        CZK: 0.060,
        DKK: 0.018,
        GBP: 0.0021,
        HKD: 0.019,
        HRK: 0.018,
        HUF: 1,
        IDR: 37.41,
        ILS: 0.0086,
        INR: 0.20,
        ISK: 0.35,
        JPY: 0.36,
        KRW: 3.44,
        MXN: 0.048,
        MYR: 0.011,
        NOK: 0.026,
        NZD: 0.0042,
        PHP: 0.14,
        PLN: 0.012,
        RON: 0.012,
        RUB: 0.15,
        SEK: 0.027,
        SGD: 0.034,
        THB: 0.092,
        TRY: 0.045,
        USD: 0.0024,
        ZAR: 0.044,
    },
    // IDR: 17323.54,
    IDR: {
        EUR: 0.000065,
        AUD: 0.00010,
        BGN: 0.00013,
        BRL: 0.00033,
        CAD: 0.000088,
        CHF: 0.000065,
        CNY: 0.00047,
        CZK: 0.0016,
        DKK: 0.00049,
        GBP: 0.000057,
        HKD: 0.00051,
        HRK: 0.00049,
        HUF: 0.027,
        IDR: 1,
        ILS: 0.00023,
        INR: 0.0053,
        ISK: 0.0093,
        JPY: 0.0095,
        KRW: 0.092,
        MXN: 0.0013,
        MYR: 0.00030,
        NOK: 0.00069,
        NZD: 0.00011,
        PHP: 0.0038,
        PLN: 0.00031,
        RON: 0.00032,
        RUB: 0.0040,
        SEK: 0.00072,
        SGD: 0.00091,
        THB: 0.0024,
        TRY: 0.0012,
        USD: 0.000064,
        ZAR: 0.0012,
    },
    // ILS: 4.1706,
    ILS: {
        EUR: 0.28,
        AUD: 0.44,
        BGN: 0.56,
        BRL: 1.45,
        CAD: 0.38,
        CHF: 0.28,
        CNY: 2.03,
        CZK: 6.97,
        DKK: 2.12,
        GBP: 0.25,
        HKD: 2.20,
        HRK: 2.15,
        HUF: 116.64,
        IDR: 5363.47,
        ILS: 1,
        INR: 23.18,
        ISK: 40.47,
        JPY: 41.48,
        KRW: 401.36,
        MXN: 5.59,
        MYR: 1.33,
        NOK: 3.03,
        NZD: 0.49,
        PHP: 16.53,
        PLN: 1.36,
        RON: 1.40,
        RUB: 17.31,
        SEK: 3.14,
        SGD: 0.40,
        THB: 10.68,
        TRY: 5.22,
        USD: 0.28,
        ZAR: 5.08,
    },
    // INR: 83.7175,
    INR: {
        EUR: 0.012,
        AUD: 0.019,
        BGN: 0.024,
        BRL: 0.063,
        CAD: 0.017,
        CHF: 0.012,
        CNY: 0.088,
        CZK: 0.30,
        DKK: 0.091,
        GBP: 0.011,
        HKD: 0.095,
        HRK: 0.093,
        HUF: 5.03,
        IDR: 188.24,
        ILS: 0.043,
        INR: 1,
        ISK: 1.75,
        JPY: 1.79,
        KRW: 17.31,
        MXN: 0.24,
        MYR: 0.057,
        NOK: 0.13,
        NZD: 0.021,
        PHP: 0.71,
        PLN: 0.059,
        RON: 0.060,
        RUB: 0.75,
        SEK: 0.14,
        SGD: 0.017,
        THB: 0.46,
        TRY: 0.23,
        USD: 0.012,
        ZAR: 0.22,
    },
    // ISK: 127.8,
    ISK: {
        EUR: 0.0071,
        AUD: 0.011,
        BGN: 0.014,
        BRL: 0.036,
        CAD: 0.0095,
        CHF: 0.0070,
        CNY: 0.051,
        CZK: 0.17,
        DKK: 0.053,
        GBP: 0.0062,
        HKD: 0.055,
        HRK: 0.053,
        HUF: 2.90,
        IDR: 108.60,
        ILS: 0.025,
        INR: 0.58,
        ISK: 1,
        JPY: 1.03,
        KRW: 9.99,
        MXN: 0.14,
        MYR: 0.033,
        NOK: 0.075,
        NZD: 0.012,
        PHP: 0.41,
        PLN: 0.034,
        RON: 0.035,
        RUB: 0.43,
        SEK: 0.078,
        SGD: 0.0099,
        THB: 0.27,
        TRY: 0.13,
        USD: 0.0070,
        ZAR: 0.13,
    },
    // JPY: 129.55,
    JPY: {
        EUR: 0.0069,
        AUD: 0.011,
        BGN: 0.013,
        BRL: 0.035,
        CAD: 0.0092,
        CHF: 0.0068,
        CNY: 0.049,
        CZK: 0.17,
        DKK: 0.051,
        GBP: 0.0060,
        HKD: 0.053,
        HRK: 0.052,
        HUF: 2.81,
        IDR: 105.23,
        ILS: 0.024,
        INR: 0.56,
        ISK: 0.98,
        JPY: 1,
        KRW: 9.68,
        MXN: 0.13,
        MYR: 0.032,
        NOK: 0.073,
        NZD: 0.012,
        PHP: 0.40,
        PLN: 0.033,
        RON: 0.034,
        RUB: 0.42,
        SEK: 0.076,
        SGD: 0.0096,
        THB: 0.26,
        TRY: 0.13,
        USD: 0.0068,
        ZAR: 0.12,
    },
    // KRW: 1304.76,
    KRW: {
        EUR: 0.00071,
        AUD: 0.0011,
        BGN: 0.0014,
        BRL: 0.0036,
        CAD: 0.00096,
        CHF: 0.00070,
        CNY: 0.0051,
        CZK: 0.017,
        DKK: 0.0053,
        GBP: 0.00062,
        HKD: 0.0055,
        HRK: 0.0053,
        HUF: 0.29,
        IDR: 10.87,
        ILS: 0.0025,
        INR: 0.058,
        ISK: 0.10,
        JPY: 0.10,
        KRW: 1,
        MXN: 0.014,
        MYR: 0.0033,
        NOK: 0.0075,
        NZD: 0.0012,
        PHP: 0.041,
        PLN: 0.034,
        RON: 0.035,
        RUB: 0.043,
        SEK: 0.0078,
        SGD: 0.00099,
        THB: 0.027,
        TRY: 0.013,
        USD: 0.00070,
        ZAR: 0.013,
    },
    // MXN: 22.3653,
    MXN: {
        EUR: 0.051,
        AUD: 0.079,
        BGN: 0.100,
        BRL: 0.26,
        CAD: 0.069,
        CHF: 0.050,
        CNY: 0.36,
        CZK: 1.25,
        DKK: 0.38,
        GBP: 0.044,
        HKD: 0.39,
        HRK: 0.38,
        HUF: 20.85,
        IDR: 779.94,
        ILS: 0.18,
        INR: 4.14,
        ISK: 7.23,
        JPY: 7.41,
        KRW: 71.74,
        MXN: 1,
        MYR: 0.24,
        NOK: 0.54,
        NZD: 0.087,
        PHP: 2.96,
        PLN: 0.24,
        RON: 0.25,
        RUB: 3.09,
        SEK: 0.56,
        SGD: 0.050,
        THB: 1.91,
        TRY: 0.93,
        USD: 0.050,
        ZAR: 0.91,
    },
    // MYR: 4.812,
    MYR: {
        EUR: 0.22,
        AUD: 0.33,
        BGN: 0.42,
        BRL: 1.09,
        CAD: 0.29,
        CHF: 0.21,
        CNY: 1.53,
        CZK: 5.24,
        DKK: 1.59,
        GBP: 0.19,
        HKD: 1.66,
        HRK: 1.61,
        HUF: 87.66,
        IDR: 3279.28,
        ILS: 0.75,
        INR: 17.42,
        ISK: 30.41,
        JPY: 31.52,
        KRW: 301.63,
        MXN: 4.20,
        MYR: 1,
        NOK: 2.28,
        NZD: 0.37,
        PHP: 12.43,
        PLN: 1.02,
        RON: 1.05,
        RUB: 13.01,
        SEK: 2.36,
        SGD: 0.30,
        THB: 8.12,
        TRY: 3.92,
        USD: 0.21,
        ZAR: 3.82,
    },
    // NOK: 9.776,
    NOK: {
        EUR: 0.096,
        AUD: 0.15,
        BGN: 0.19,
        BRL: 0.49,
        CAD: 0.13,
        CHF: 0.095,
        CNY: 0.69,
        CZK: 2.36,
        DKK: 0.72,
        GBP: 0.084,
        HKD: 0.75,
        HRK: 0.73,
        HUF: 39.44,
        IDR: 1475.43,
        ILS: 0.34,
        INR: 7.84,
        ISK: 13.68,
        JPY: 14.03,
        KRW: 135.71,
        MXN: 1.89,
        MYR: 0.45,
        NOK: 1,
        NZD: 0.17,
        PHP: 5.59,
        PLN: 0.46,
        RON: 0.47,
        RUB: 5.85,
        SEK: 1.06,
        SGD: 0.13,
        THB: 3.61,
        TRY: 1.77,
        USD: 0.095,
        ZAR: 1.72,
    },
    // NZD: 1.7633,
    NZD: {
        EUR: 0.58,
        AUD: 0.90,
        BGN: 1.14,
        BRL: 2.97,
        CAD: 0.78,
        CHF: 0.57,
        CNY: 4.17,
        CZK: 14.28,
        DKK: 4.34,
        GBP: 0.51,
        HKD: 4.51,
        HRK: 4.39,
        HUF: 238.83,
        IDR: 8934.99,
        ILS: 2.05,
        INR: 47.47,
        ISK: 82.86,
        JPY: 84.93,
        KRW: 821.81,
        MXN: 11.46,
        MYR: 2.72,
        NOK: 6.20,
        NZD: 1,
        PHP: 33.86,
        PLN: 2.79,
        RON: 2.87,
        RUB: 35.45,
        SEK: 6.44,
        SGD: 0.81,
        THB: 21.88,
        TRY: 10.69,
        USD: 0.58,
        ZAR: 10.40,
    },
    // PHP: 62.592,
    PHP: {
        EUR: 0.017,
        AUD: 0.027,
        BGN: 0.034,
        BRL: 0.088,
        CAD: 0.023,
        CHF: 0.017,
        CNY: 0.12,
        CZK: 0.42,
        DKK: 0.13,
        GBP: 0.015,
        HKD: 0.13,
        HRK: 0.13,
        HUF: 7.05,
        IDR: 263.90,
        ILS: 0.060,
        INR: 1.40,
        ISK: 2.45,
        JPY: 2.51,
        KRW: 24.27,
        MXN: 0.34,
        MYR: 0.080,
        NOK: 0.18,
        NZD: 0.030,
        PHP: 1,
        PLN: 0.082,
        RON: 0.085,
        RUB: 1.05,
        SEK: 0.19,
        SGD: 0.024,
        THB: 0.65,
        TRY: 0.32,
        USD: 0.017,
        ZAR: 0.31,
    },
    // PLN: 4.3183,
    PLN: {
        EUR: 0.21,
        AUD: 0.32,
        BGN: 0.41,
        BRL: 1.07,
        CAD: 0.28,
        CHF: 0.21,
        CNY: 1.50,
        CZK: 5.13,
        DKK: 1.56,
        GBP: 0.18,
        HKD: 1.62,
        HRK: 1.58,
        HUF: 85.75,
        IDR: 3207.73,
        ILS: 0.74,
        INR: 17.04,
        ISK: 29.75,
        JPY: 30.49,
        KRW: 295.05,
        MXN: 4.11,
        MYR: 0.98,
        NOK: 2.23,
        NZD: 0.36,
        PHP: 12.16,
        PLN: 1,
        RON: 1.03,
        RUB: 12.73,
        SEK: 2.31,
        SGD: 0.29,
        THB: 7.85,
        TRY: 3.84,
        USD: 0.21,
        ZAR: 3.73,
    },
    // RON: 4.6385,
    RON: {
        EUR: 0.20,
        AUD: 0.31,
        BGN: 0.40,
        BRL: 1.04,
        CAD: 0.27,
        CHF: 0.20,
        CNY: 1.45,
        CZK: 4.98,
        DKK: 1.51,
        GBP: 0.18,
        HKD: 1.58,
        HRK: 1.53,
        HUF: 83.36,
        IDR: 3118.48,
        ILS: 0.71,
        INR: 16.57,
        ISK: 28.92,
        JPY: 29.64,
        KRW: 286.84,
        MXN: 4.00,
        MYR: 0.95,
        NOK: 2.16,
        NZD: 0.35,
        PHP: 11.82,
        PLN: 0.97,
        RON: 1,
        RUB: 12.37,
        SEK: 2.25,
        SGD: 0.28,
        THB: 7.63,
        TRY: 3.73,
        USD: 0.20,
        ZAR: 3.63,
    },
    // RUB: 79.5747,
    RUB: {
        EUR: 0.016,
        AUD: 0.021,
        BGN: 0.032,
        BRL: 0.084,
        CAD: 0.022,
        CHF: 0.016,
        CNY: 0.12,
        CZK: 0.40,
        DKK: 0.12,
        GBP: 0.014,
        HKD: 0.13,
        HRK: 0.12,
        HUF: 6.74,
        IDR: 252.02,
        ILS: 0.058,
        INR: 1.34,
        ISK: 2.34,
        JPY: 2.40,
        KRW: 23.18,
        MXN: 0.32,
        MYR: 0.077,
        NOK: 0.17,
        NZD: 0.028,
        PHP: 0.95,
        PLN: 0.079,
        RON: 0.081,
        RUB: 1,
        SEK: 0.18,
        SGD: 0.023,
        THB: 0.62,
        TRY: 0.30,
        USD: 0.016,
        ZAR: 0.29,
    },
    // SEK: 10.5908,
    SEK: {
        EUR: 0.091,
        AUD: 0.14,
        BGN: 0.18,
        BRL: 0.46,
        CAD: 0.12,
        CHF: 0.089,
        CNY: 0.65,
        CZK: 2.22,
        DKK: 0.67,
        GBP: 0.079,
        HKD: 0.70,
        HRK: 0.68,
        HUF: 37.09,
        IDR: 1387.45,
        ILS: 0.32,
        INR: 7.37,
        ISK: 12.87,
        JPY: 13.19,
        KRW: 127.62,
        MXN: 1.78,
        MYR: 0.42,
        NOK: 0.96,
        NZD: 0.16,
        PHP: 5.26,
        PLN: 0.43,
        RON: 0.44,
        RUB: 5.51,
        SEK: 1,
        SGD: 0.13,
        THB: 3.40,
        TRY: 1.66,
        USD: 0.089,
        ZAR: 1.62,
    },
    // SGD: 1.6,
    SGD: {
        EUR: 0.72,
        AUD: 1.11,
        BGN: 1.40,
        BRL: 3.65,
        CAD: 0.96,
        CHF: 0.71,
        CNY: 5.12,
        CZK: 17.54,
        DKK: 5.33,
        GBP: 0.63,
        HKD: 5.55,
        HRK: 5.40,
        HUF: 293.45,
        IDR: 10978.03,
        ILS: 2.52,
        INR: 58.32,
        ISK: 101.82,
        JPY: 104.36,
        KRW: 1009.77,
        MXN: 14.08,
        MYR: 3.35,
        NOK: 7.62,
        NZD: 1.23,
        PHP: 41.60,
        PLN: 3.42,
        RON: 3.52,
        RUB: 43.56,
        SEK: 7.91,
        SGD: 1,
        THB: 26.87,
        TRY: 13.14,
        USD: 0.71,
        ZAR: 12.78,
    },
    // THB: 38.13,
    THB: {
        EUR: 0.027,
        AUD: 0.041,
        BGN: 0.052,
        BRL: 0.14,
        CAD: 0.036,
        CHF: 0.026,
        CNY: 0.19,
        CZK: 0.65,
        DKK: 0.20,
        GBP: 0.023,
        HKD: 0.21,
        HRK: 0.20,
        HUF: 10.92,
        IDR: 408.51,
        ILS: 0.094,
        INR: 2.17,
        ISK: 3.79,
        JPY: 3.88,
        KRW: 37.58,
        MXN: 0.52,
        MYR: 0.12,
        NOK: 0.28,
        NZD: 0.046,
        PHP: 1.55,
        PLN: 0.13,
        RON: 0.13,
        RUB: 1.62,
        SEK: 0.29,
        SGD: 0.037,
        THB: 1,
        TRY: 0.49,
        USD: 0.026,
        ZAR: 0.48,
    },
    // TRY: 7.6282,
    TRY: {
        EUR: 0.055,
        AUD: 0.084,
        BGN: 0.11,
        BRL: 0.28,
        CAD: 0.073,
        CHF: 0.054,
        CNY: 0.39,
        CZK: 1.34,
        DKK: 0.41,
        GBP: 0.048,
        HKD: 0.42,
        HRK: 0.41,
        HUF: 22.33,
        IDR: 835.49,
        ILS: 0.19,
        INR: 4.44,
        ISK: 7.75,
        JPY: 7.94,
        KRW: 76.85,
        MXN: 1.07,
        MYR: 0.25,
        NOK: 0.58,
        NZD: 0.094,
        PHP: 3.17,
        PLN: 0.26,
        RON: 0.27,
        RUB: 3.30,
        SEK: 0.60,
        SGD: 0.076,
        THB: 2.05,
        TRY: 1,
        USD: 0.054,
        ZAR: 0.97,
    },
    // USD: 1.1634,
    USD: {
        EUR: 1.01,
        AUD: 1.6164,
        BGN: 1.9558,
        BRL: 4.7918,
        CAD: 1.5338,
        CHF: 1.1275,
        CNY: 7.9451,
        CZK: 25.715,
        DKK: 7.4567,
        GBP: 0.89824,
        HKD: 9.1324,
        HRK: 7.4341,
        HUF: 326.49,
        IDR: 17323.54,
        ILS: 4.1706,
        INR: 83.7175,
        ISK: 127.8,
        JPY: 129.55,
        KRW: 1304.76,
        MXN: 22.3653,
        MYR: 4.812,
        NOK: 9.776,
        NZD: 1.7633,
        PHP: 62.592,
        PLN: 4.3183,
        RON: 4.6385,
        RUB: 79.5747,
        SEK: 10.5908,
        SGD: 1.6,
        THB: 38.13,
        TRY: 7.6282,
        USD: 1,
        ZAR: 17.8233,
    },
    // ZAR: 17.8233,
    ZAR: {
        EUR: 1.55,
        AUD: 0.087,
        BGN: 0.11,
        BRL: 0.29,
        CAD: 0.076,
        CHF: 0.055,
        CNY: 0.40,
        CZK: 1.37,
        DKK: 0.43,
        GBP: 0.049,
        HKD: 0.43,
        HRK: 0.42,
        HUF: 22.96,
        IDR: 859.08,
        ILS: 0.20,
        INR: 4.56,
        ISK: 7.97,
        JPY: 8.15,
        KRW: 79.38,
        MXN: 1.10,
        MYR: 0.26,
        NOK: 0.60,
        NZD: 0.096,
        PHP: 3.26,
        PLN: 0.27,
        RON: 0.28,
        RUB: 3.41,
        SEK: 0.62,
        SGD: 0.078,
        THB: 2.10,
        TRY: 1.03,
        USD: 0.055,
        ZAR: 1,
    },
}

export const api = (_path = "") => {

    if (_path.length === 0) {
        return Promise.reject(new Error('Path is require'));
    }

    const [path] = _path.split('?');


    if (path !== '/latest') {
        return Promise.reject(new Error('Invalid path'))
    }

    const baseCurrency = _path.split('base=')[1];
    // console.log(baseCurrency);
    // if (baseCurrency === 'INR') {
    //     // setPassingList(India);
    //     // console.log("India")
    //     // passingList = India;
    //     // setPassingList(...India)
    // }
    // else if (baseCurrency === "HKD") {
    //     // setPassingList(Hokad);
    //     console.log("hokad")
    //     // passingList = Hokad
    //     // setPassingList(...Hokad)
    // }
    // else {
    //     // setPassingList(SAMPLE_RATES);
    //     console.log("else...")
    //     // passingList = SAMPLE_RATES
    //     // setPassingList(...SAMPLE_RATES)
    // }


    // return Promise.resolve({ 
    //     base: baseCurrency,
    //     date: format(new Date(), 'yyyy-MM-dd'),
    //     rates: {
    //         ...SAMPLE_RATES,
    //         [baseCurrency]: 1,
    //     },
    // });

    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                base: baseCurrency,
                date: format(new Date(), 'yyyy-MM-dd'),
                rates: {
                    ...SAMPLE_RATES[baseCurrency],
                    // ...passingList,
                    // [baseCurrency]: 1,
                },
            });
        }, 500)
    })
}