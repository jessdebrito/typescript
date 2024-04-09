export interface IRecipe{
    id: number;
    title: string;
    content: string;
    created_at: Date;
    uppdated_at: Date;
}

// Type - instância de tipo - significa que consegue armazenar qualquer "tipo" existente no Typescript

/* ---------------------------
type TString = string;
type TNumber = number;
type TStringOrNumber = string | number;
type TRecipe = IRecipe;
type TUserRole = "USER" | "ADMIN" | "MODERADOR";
------------------------ */

// Omit / Pick / Partial - cria variação de tipo com base em uma interface

/* ---------------------------
function sayUserRole(role: TUserRole){
    console.log(role);
}
sayUserRole 
------------------------ */
// Omit - permite interagir com uma interface e omitir chaves da mesma
// Pick - Interagir com uma interface e "pegar" chaves da mesma
// Partial -

// export type TRecipeCreateData = Omit<IRecipe, "id" | "created_at" | "updated_at">
export type TRecipeCreateData = Pick<IRecipe, "title" | "content">;
