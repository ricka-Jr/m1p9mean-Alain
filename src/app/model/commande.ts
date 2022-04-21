export interface Commande {
    plat: {
        _id : string,
        designation: string,
        prix: number,
        profil: string,
        restaurant: {
            _id: string,
            nom: string
        }
    },
    client: {
        _id: string,
        nom: string
    },
    quantite: Number
}
