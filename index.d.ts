export function isIphoneX(): boolean;
export function isDynamicIsland(): boolean;
export function ifIphoneX<T, U>(iphoneXVal: T, regularVal: U): T | U;
export function ifIphoneX<T>(iphoneXVal: T): T;
export function getStatusBarHeight(safe?: boolean): number;
export function getBottomSpace(): number;


export function isIphoneXLegacy(): boolean;
export function isDynamicIslandLegacy(): boolean;
export function ifIphoneXLegacy<T, U>(iphoneXVal: T, regularVal: U): T | U;
export function ifIphoneXLegacy<T>(iphoneXVal: T): T;
export function getStatusBarHeightLegacy(safe?: boolean): number;
export function getBottomSpaceLegacy(): number;

