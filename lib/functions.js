// REQUIREMENTS
const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");
const fs = require("fs-extra");
const f = require("./files");
const e = require("./extra");
const inquirer = require("./inquirer");

// Core
module.exports = {
    // Función que muestra la cabecera del plugin
    showHeader: () => {
        clear();
        console.log(
            chalk.yellow(
                figlet.textSync("Freyja Create Plugins", {
                    horizontalLayout: "full"
                })
            )
        );
    },
    // Función que muestra el menú inicial del programa
    init: async control => {
        // Mostramos la cabecera
        module.exports.showHeader();
        // Mostramos información según el retorno que obtengamos de las demás funciones del menú
        switch (control) {
            case 11:
                console.log(
                    "\nYa has usado ese nombre para un plugin, revisa los plugins que hay ya creados antes de crear uno nuevo titán.\n"
                );
                break;
            default:
        }
        // Le pedimos al usuario que elija alguna funcionalidad del programa
        let data = await inquirer.showMenu();
        // Orientamos al usuario según la opción elegida
        switch (data.menu) {
            case "Crear plugin":
                module.exports.createPlugin();
                break;
            case "Gestionar plugins":
                module.exports.managePlugins();
                break;
            case "Salir":
                module.exports.exitFromSystem();
                break;
            default:
        }
    },
    // Función que orquesta la creación de un plugin
    createPlugin: async () => {
        // Mostramos la cabecera
        module.exports.showHeader();
        // Le pedimos al usuario los datos del plugin
        let data = await inquirer.askPluginConfiguration();
        // Generamos el plugin
        let plugin_name = e.string_to_slug(data.plugin_name);
        // Controlamos si el nombre ya ha sido usado para ese plugin
        if (f.directoryExists("./../plugins/" + plugin_name)) {
            module.exports.init(11);
        }
        // Clonamos el plugin base en la carpeta de plugins y cambiamos los datos
        fs.copy("./../assets/plugin", "./../plugins")
            .then(() => console.log("success!"))
            .catch(err => console.error(err));
    },
    // Función que orquesta la gestión de plugins
    managePlugins: () => {
        console.log("\nEstoy aún en desarrollo, tranquilito titán =)");
    },
    // Función que saca del sistema al usuario
    exitFromSystem: () => {
        console.log(
            "\nHa sido un placer poder ayudarte, pero recuerda... no le digas a Odín que te he ayudado =p"
        );
    }
};
