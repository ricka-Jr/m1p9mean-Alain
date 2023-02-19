const express = require('express')
const connex = require('../connection');
const plat = require('../model/PlatModel');
const ServiceExtension = require('../service/ServiceExtension');
const MenuMetier = require("../metier/menu");

const { dirname } = require('path');
const pathProject = dirname(require.main.filename);
class PlatMetier extends ServiceExtension {
    compareTo(input1, input2){
        let value = false;
        if(input1.toLowerCase() === input2.toLowerCase()){
            value = true;
        }
        return value;
    }
    
    encodeImgToBase64(path, img){
        let image = pathProject + '/assets/img/' + path + '/' + img
        const menuMetier = new MenuMetier();
        return menuMetier.base64_encode(image)
    }

    findPlat() {
        try {
            plat.find({ 'menu._id': this.req.params.id })
                .then(
                    (data) => {
                        data.forEach(object => {
                            const menu = object.menu.plat.toLowerCase()
                            switch (menu) {
                            case "plats".toLowerCase():
                                object.profil = this.encodeImgToBase64('plats', object.profil)
                                break;
                            case "Min-Sao".toLowerCase():
                                object.profil = this.encodeImgToBase64('minsao', object.profil)
                                break;
                            case "Soupe".toLowerCase():
                                object.profil = this.encodeImgToBase64('soupe', object.profil)
                                break;
                            case "Pizza".toLowerCase():
                                object.profil = this.encodeImgToBase64('pizza', object.profil)
                                break;
                            case "Tacos".toLowerCase():
                                object.profil = this.encodeImgToBase64('tacos', object.profil)
                                break;
                            default:
                                object.profil = this.encodeImgToBase64('boisson', object.profil)
                                break;
                            }

                        });
                        this.res.status(200).json({ 'status': 'OK', 'data': { 'plats': data } });
                    }
                )
                .catch(
                    (err) => {
                        this.res.status(500).json({ 'status': 'KO', 'error': err.message });
                    }
                );
        } catch (error) {
            this.res.status(500).json({ 'status': 'KO', 'error': error.message });
        }
    }
}

module.exports = PlatMetier