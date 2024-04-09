export interface IRecipe{
    id: number;
    title: string;
    content: string;
    created_at: Date;
    uppdated_at: Date;
}

// Type - instância de tipo - significa que consegue armazenar qualquer "tipo" existente no Typescript

type TString = string;
type TNumber = number;
type TStringOrNumber = string | number;
type TRecipe = IRecipe;
type TUserRole = "USER" | "ADMIN" | "MODERADOR";