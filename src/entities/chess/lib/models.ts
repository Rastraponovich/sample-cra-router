export type TCell = {
    x: number
    y: number
    figure: TFigure | null
    color: TColor
}

export type TChessBoard = TCell[][]

export type TColor = "dark" | "light"

export type TFigureType =
    | "PAWN"
    | "ROOK"
    | "KING"
    | "KNIGHT"
    | "QUEEN"
    | "BISHOP"

export enum EFigureType {
    PAWN = "PAWN",
    ROOK = "ROOK",
    KING = "KING",
    KNIGHT = "KNIGHT",
    QUEEN = "QUEEN",
    BISHOP = "BISHOP",
}

export enum EFigureColor {
    LIGHT = "LIGHT",
    DARK = "DARK",
}

export type TFigure = {
    id: string
    x: number
    y: number
    color: EFigureColor
    type: EFigureType
}

export interface IPawnFigure extends TFigure {
    type: EFigureType.PAWN
}

export interface IBishopFigure extends TFigure {
    type: EFigureType.BISHOP
}
export interface IQueenFigure extends TFigure {
    type: EFigureType.QUEEN
}
export interface IKingFigure extends TFigure {
    type: EFigureType.KING
}
export interface IKnightFigure extends TFigure {
    type: EFigureType.KNIGHT
}
export interface IRookFigure extends TFigure {
    type: EFigureType.ROOK
}
