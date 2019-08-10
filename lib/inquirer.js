// Functions about ask data
const inquirer = require("inquirer");
const files = require("./files");

module.exports = {
    askPluginConfiguration: () => {
        const questions = [
            {
                name: "plugin_name",
                type: "input",
                message: "Nombre:",
                validate: function(value) {
                    if (value.length) {
                        return true;
                    } else {
                        return "Por favor, dale un nombre a tu plugin.";
                    }
                }
            },
            {
                name: "plugin_uri",
                type: "input",
                message: "URL:"
            },
            {
                name: "plugin_description",
                type: "input",
                message: "Descripción:",
                validate: function(value) {
                    if (value.length) {
                        return true;
                    } else {
                        return "Por favor, describe un poco qué hará tu plugin.";
                    }
                }
            },
            {
                name: "plugin_version",
                type: "input",
                message: "Versión:"
            },
            {
                name: "plugin_author",
                type: "input",
                message: "Autor:",
                validate: function(value) {
                    if (value.length) {
                        return true;
                    } else {
                        return "Por favor, alguien tiene que haber creado este plugin...";
                    }
                }
            },
            {
                name: "plugin_author_uri",
                type: "input",
                message: "Url del autor:"
            },
            {
                name: "plugin_license",
                type: "input",
                message: "Licencia:"
            },
            {
                name: "plugin_license_uri",
                type: "input",
                message: "Url de la licencia:"
            },
            {
                name: "plugin_text_domain",
                type: "input",
                message: "Text domain:",
                validate: function(value) {
                    if (value.length) {
                        return true;
                    } else {
                        return "Por favor, no empecemos liándola, introduce un text domain anda.";
                    }
                }
            }
        ];
        return inquirer.prompt(questions);
    },
    showMenu: () => {
        const questions = [
            {
                name: "menu",
                type: "rawlist",
                message: "MENU",
                choices: ["Crear plugin", "Gestionar plugins", "Salir"]
            }
        ];
        return inquirer.prompt(questions);
    }
};
