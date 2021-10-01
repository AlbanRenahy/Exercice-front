export interface Patient {
    id: number,
    date_de_naissance: Date,
    nom: string,
    prenom: string,
    numero_securite_sociale: string,
    sexe: string,
    adresse: object,
    infirmiere: object,
}