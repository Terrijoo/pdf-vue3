import type { PDFDocumentProxy } from "./index";
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    /**
     * pdf url | Uint8Array | BASE64
     */
    src: string | Uint8Array;
    httpHeaders?: Record<string, any> | undefined;
    withCredentials?: boolean | undefined;
    password?: string | undefined;
    useSystemFonts?: boolean | undefined;
    stopAtErrors?: boolean | undefined;
    disableFontFace?: boolean | undefined;
    disableRange?: boolean | undefined;
    disableStream?: boolean | undefined;
    disableAutoFetch?: boolean | undefined;
    annotationMode?: number | undefined;
    isUrl?: boolean | undefined;
    showProgress?: boolean | undefined;
    progressColor?: string | undefined;
    showPageTooltip?: boolean | undefined;
    showBackToTopBtn?: boolean | undefined;
    scrollThreshold?: number | undefined;
    pdfWidth?: string | undefined;
    rowGap?: number | undefined;
    page?: number | undefined;
    cMapUrl?: string | undefined;
}>, {
    src: undefined;
    httpHeaders: undefined;
    withCredentials: undefined;
    password: undefined;
    useSystemFonts: undefined;
    stopAtErrors: undefined;
    disableFontFace: undefined;
    disableRange: undefined;
    disableStream: undefined;
    disableAutoFetch: undefined;
    annotationMode: undefined;
    isUrl: undefined;
    showProgress: boolean;
    progressColor: string;
    showPageTooltip: boolean;
    showBackToTopBtn: boolean;
    scrollThreshold: number;
    pdfWidth: string;
    rowGap: number;
    page: number;
    cMapUrl: string;
}>>, {
    reload: () => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    onProgress: (loadRatio: number) => void;
    onComplete: () => void;
    onScroll: (scrollOffset: number) => void;
    onPageChange: (page: number) => void;
    onPdfInit: (pdf: PDFDocumentProxy) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    /**
     * pdf url | Uint8Array | BASE64
     */
    src: string | Uint8Array;
    httpHeaders?: Record<string, any> | undefined;
    withCredentials?: boolean | undefined;
    password?: string | undefined;
    useSystemFonts?: boolean | undefined;
    stopAtErrors?: boolean | undefined;
    disableFontFace?: boolean | undefined;
    disableRange?: boolean | undefined;
    disableStream?: boolean | undefined;
    disableAutoFetch?: boolean | undefined;
    annotationMode?: number | undefined;
    isUrl?: boolean | undefined;
    showProgress?: boolean | undefined;
    progressColor?: string | undefined;
    showPageTooltip?: boolean | undefined;
    showBackToTopBtn?: boolean | undefined;
    scrollThreshold?: number | undefined;
    pdfWidth?: string | undefined;
    rowGap?: number | undefined;
    page?: number | undefined;
    cMapUrl?: string | undefined;
}>, {
    src: undefined;
    httpHeaders: undefined;
    withCredentials: undefined;
    password: undefined;
    useSystemFonts: undefined;
    stopAtErrors: undefined;
    disableFontFace: undefined;
    disableRange: undefined;
    disableStream: undefined;
    disableAutoFetch: undefined;
    annotationMode: undefined;
    isUrl: undefined;
    showProgress: boolean;
    progressColor: string;
    showPageTooltip: boolean;
    showBackToTopBtn: boolean;
    scrollThreshold: number;
    pdfWidth: string;
    rowGap: number;
    page: number;
    cMapUrl: string;
}>>> & Readonly<{
    onOnProgress?: ((loadRatio: number) => any) | undefined;
    onOnComplete?: (() => any) | undefined;
    onOnScroll?: ((scrollOffset: number) => any) | undefined;
    onOnPageChange?: ((page: number) => any) | undefined;
    onOnPdfInit?: ((pdf: PDFDocumentProxy) => any) | undefined;
}>, {
    src: string | Uint8Array;
    httpHeaders: Record<string, any>;
    withCredentials: boolean;
    password: string;
    useSystemFonts: boolean;
    stopAtErrors: boolean;
    disableFontFace: boolean;
    disableRange: boolean;
    disableStream: boolean;
    disableAutoFetch: boolean;
    annotationMode: number;
    isUrl: boolean;
    showProgress: boolean;
    progressColor: string;
    showPageTooltip: boolean;
    showBackToTopBtn: boolean;
    scrollThreshold: number;
    pdfWidth: string;
    rowGap: number;
    page: number;
    cMapUrl: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, Readonly<{
    progress?: ((props: {
        loadRatio: number;
    }) => any) | undefined;
    pageTooltip?: ((props: {
        currentPage: number;
        totalPages: number;
    }) => any) | undefined;
    backToTopBtn?: ((props: {
        scrollOffset: number;
    }) => any) | undefined;
}> & {
    progress?: ((props: {
        loadRatio: number;
    }) => any) | undefined;
    pageTooltip?: ((props: {
        currentPage: number;
        totalPages: number;
    }) => any) | undefined;
    backToTopBtn?: ((props: {
        scrollOffset: number;
    }) => any) | undefined;
}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
