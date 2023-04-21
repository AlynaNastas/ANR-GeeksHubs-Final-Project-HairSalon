import dayjs from 'dayjs';

export const validation = (name, info, required) => {
    switch (name) {
        case "name":
        case "surname":
        case "nombre":
        case "apellido":


            if (info === "" && required === true) {

                return { message: "Please fill the field", validation: false };


            } else if (!/[a-z]/gi.test(info)) {
                return { message: "Please fill with a valid text", validation: false };
            }

            return { message: "", validation: true };


        case "email":
            if (info === "" && required === true) {
                return { message: "Please fill the field", validation: false };
            } else if (
                !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(info)
            ) {
                return { message: "Invalid e-mail format", validation: false };
            }

            return { message: "", validation: true };

        case "password":
            if (info === "" && required === true) {
                return { message: "Please fill the field", validation: false };
            } else if (!/[\d()+-]/g.test(info)) {
                return { message: "Invalid password format", validation: false };
            }
            return { message: "", validation: true };


        case "phone":
        case "teléfono":
        case "telephone number":
        case "tel":
            if (info === "" && required === true) {
                return { message: "Please fill the field", validation: false };
            } else if (!/\+?\(?\d{2,4}\)?[\d\s-]{9}/.test(info)) {
                return { message: "Invalid phone number", validation: false };
            }
            return { message: "", validation: true };

        case "Fecha de nacimiento":
        case "Date of Birth":
        case "birth_date":


            let fecha_hoy = dayjs();

            let years = fecha_hoy.diff(info, 'years');

            if (years < 15) {
                return { message: "You must be 15 or be authorized by an adult", validation: false };

            }

            
            return { message: "", validation: true };



        default:
            console.log("Fielt not recognized");
    }
};