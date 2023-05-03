import dayjs from 'dayjs';

export const validation = (name, info, required) => {
    switch (name) {
        case "name":
        case "surname":



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


        case "telephone number":
        case "tel":
        case "phone":
            if (info === "" && required === true) {
                return { message: "Please fill the field", validation: false };
            } else if (!/\+?\(?\d{2,4}\)?[\d\s-]{9}/.test(info)) {
                return { message: "Invalid phone number", validation: false };
            }
            return { message: "", validation: true };

        case "Fecha de nacimiento":
        case "Date of Birth":
        case "birth_date":

            const isBefore2008 = (date) => {
                const maxDate = dayjs('05-05-2008');
                return dayjs(date).isBefore(maxDate, 'day');
            };
            if (info === "" && required === true) {
                return { message: "Please fill the field", validation: false };
            } else if (!isBefore2008(info)) {
                return { message: "Please fill with a date before 2008", validation: false };
            } else {
                return { message: "", validation: true };
            }

        default:
            console.log("Fielt not recognized");
    }
};