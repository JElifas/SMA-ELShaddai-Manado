export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

export const checkValidity = (value, rules) => {
    let isValid = true;
    if (!rules) {
        return true;
    }

    if (rules.required) {
        isValid = value.trim() !== '' && isValid;
    }

    if (rules.minLength) {
        isValid = value.length >= rules.minLength && isValid
    }

    if (rules.maxLength) {
        isValid = value.length <= rules.maxLength && isValid
    }

    if (rules.isEmail) {
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        isValid = pattern.test(value) && isValid
    }

    if (rules.isNumeric) {
        const pattern = /^\d+$/;
        isValid = pattern.test(value) && isValid
    }

    return isValid;
}

export const IMAGE_URL = 'http://localhost:8080/images/';

export const resetSiswaForm = () => {
    return {
        namaDepan: {
            elementType: 'input',
            elementConfig: {
                type: 'text'
            },
            value: '',
            label: 'Nama Depan*',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        namaAkhir: {
            elementType: 'input',
            elementConfig: {
                type: 'text'
            },
            value: '',
            label: 'Nama Akhir',
            validation: {
                required: false
            },
            valid: false,
            touched: false
        },
        jenisKelamin: {
            elementType: 'select',
            elementConfig: {
                options: [
                    { value: 'Laki-laki', displayValue: 'Laki-laki' },
                    { value: 'Perempuan', displayValue: 'Perempuan' }
                ]
            },
            value: 'Laki-laki',
            label: 'Jenis Kelamin',
            validation: {},
            valid: true
        },
        tempatLahir: {
            elementType: 'input',
            elementConfig: {
                type: 'text'
            },
            value: '',
            label: 'Tempat Lahir*',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        tanggalLahir: {
            elementType: 'date',
            elementConfig: {
                type: 'date'
            },
            value: '',
            label: 'Tanggal Lahir*',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        agama: {
            elementType: 'input',
            elementConfig: {
                type: 'text'
            },
            value: '',
            label: 'Agama*',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        asalSekolah: {
            elementType: 'input',
            elementConfig: {
                type: 'text'
            },
            value: '',
            label: 'Asal Sekolah*',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        telepon: {
            elementType: 'input',
            elementConfig: {
                type: 'number'
            },
            value: '',
            label: 'Telepon*',
            validation: {
                required: true,
                isNumeric: true
            },
            valid: false,
            touched: false
        },
        email: {
            elementType: 'input',
            elementConfig: {
                type: 'email'
            },
            value: '',
            label: 'Email*',
            validation: {
                required: true,
                isEmail: true
            },
            valid: false,
            touched: false
        }
    };
};

export const resetAyahForm = () => {
    return {
        namaAyah: {
            elementType: 'input',
            elementConfig: {
                type: 'text'
            },
            value: '',
            label: 'Nama',
            validation: {
                required: false
            },
            valid: false,
            touched: false
        },
        teleponAyah: {
            elementType: 'input',
            elementConfig: {
                type: 'number'
            },
            value: '',
            label: 'Telepon',
            validation: {
                required: false
            },
            valid: false,
            touched: false
        },
        pekerjaanAyah: {
            elementType: 'input',
            elementConfig: {
                type: 'text'
            },
            value: '',
            label: 'Pekerjaan',
            validation: {
                required: false
            },
            valid: false,
            touched: false
        },
    }
}

export const resetIbuForm = () => {
    return {
        namaIbu: {
            elementType: 'input',
            elementConfig: {
                type: 'text'
            },
            value: '',
            label: 'Nama',
            validation: {
                required: false
            },
            valid: false,
            touched: false
        },
        teleponIbu: {
            elementType: 'input',
            elementConfig: {
                type: 'number'
            },
            value: '',
            label: 'Telepon',
            validation: {
                required: false
            },
            valid: false,
            touched: false
        },
        pekerjaanIbu: {
            elementType: 'input',
            elementConfig: {
                type: 'text'
            },
            value: '',
            label: 'Pekerjaan',
            validation: {
                required: false
            },
            valid: false,
            touched: false
        },
    }
}

export const resetWaliForm = () => {
    return {
        namaWali: {
            elementType: 'input',
            elementConfig: {
                type: 'text'
            },
            value: '',
            label: 'Nama',
            validation: {
                required: false
            },
            valid: false,
            touched: false
        },
        teleponWali: {
            elementType: 'input',
            elementConfig: {
                type: 'number'
            },
            value: '',
            label: 'Telepon',
            validation: {
                required: false
            },
            valid: false,
            touched: false
        },
        pekerjaanWali: {
            elementType: 'input',
            elementConfig: {
                type: 'text'
            },
            value: '',
            label: 'Pekerjaan',
            validation: {
                required: false
            },
            valid: false,
            touched: false
        },
        alamat: {
            elementType: 'textarea',
            elementConfig: {
                type: 'text'
            },
            value: '',
            label: 'Alamat Orang Tua/Wali',
            validation: {
                required: true,
                minLength: 5
            },
            valid: false,
            touched: false
        },
    }
}