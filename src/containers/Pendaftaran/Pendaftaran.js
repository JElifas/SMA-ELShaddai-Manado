import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';
import Alert from '../../components/UI/Alert/Alert';
import Modal from '../../components/UI/Modal/Modal';
import { updateObject, checkValidity, resetSiswaForm, resetAyahForm, resetIbuForm, resetWaliForm } from '../../shared/utility';
import './Pendaftaran.scss';

const Pendaftaran = props => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [siswaForm, setSiswaForm] = useState({
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
  });
  const [ayahForm, setAyahForm] = useState({
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
  });
  const [ibuForm, setIbuForm] = useState({
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
  });
  const [waliForm, setWaliForm] = useState({
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
  });

  const siswaChangedHandler = (event, inputIdentifier) => {
    const updatedFormElement = updateObject(siswaForm[inputIdentifier], {
      value: event.target.value,
      valid: checkValidity(
        event.target.value,
        siswaForm[inputIdentifier].validation
      ),
      touched: true
    });
    const updatedSiswaForm = updateObject(siswaForm, {
      [inputIdentifier]: updatedFormElement
    });

    let formIsValid = true;
    for (let inputIdentifier in updatedSiswaForm) {
      formIsValid = updatedSiswaForm[inputIdentifier].valid && formIsValid;
    }

    setFormIsValid(formIsValid);
    setSiswaForm(updatedSiswaForm);
  }

  const ayahChangedHandler = (event, inputIdentifier) => {
    const updatedFormElement = updateObject(ayahForm[inputIdentifier], {
      value: event.target.value,
      valid: checkValidity(
        event.target.value,
        ayahForm[inputIdentifier].validation
      ),
      touched: true
    });
    const updatedAyahForm = updateObject(ayahForm, {
      [inputIdentifier]: updatedFormElement
    });

    setAyahForm(updatedAyahForm);
  }

  const ibuChangedHandler = (event, inputIdentifier) => {
    const updatedFormElement = updateObject(ibuForm[inputIdentifier], {
      value: event.target.value,
      valid: checkValidity(
        event.target.value,
        ibuForm[inputIdentifier].validation
      ),
      touched: true
    });
    const updatedIbuForm = updateObject(ibuForm, {
      [inputIdentifier]: updatedFormElement
    });

    setIbuForm(updatedIbuForm);
  }

  const waliChangedHandler = (event, inputIdentifier) => {
    const updatedFormElement = updateObject(waliForm[inputIdentifier], {
      value: event.target.value,
      valid: checkValidity(
        event.target.value,
        waliForm[inputIdentifier].validation
      ),
      touched: true
    });
    const updatedWaliForm = updateObject(waliForm, {
      [inputIdentifier]: updatedFormElement
    });

    setWaliForm(updatedWaliForm);
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const siswaData = {};
    const ayahData = {};
    const ibuData = {};
    const waliData = {};

    for (let siswaFormIdentifier in siswaForm) {
      siswaData[siswaFormIdentifier] = siswaForm[siswaFormIdentifier].value;
    }
    for (let ayahFormIdentifier in ayahForm) {
      ayahData[ayahFormIdentifier] = ayahForm[ayahFormIdentifier].value;
    }
    for (let ibuFormIdentifier in ibuForm) {
      ibuData[ibuFormIdentifier] = ibuForm[ibuFormIdentifier].value;
    }
    for (let waliFormIdentifier in waliForm) {
      waliData[waliFormIdentifier] = waliForm[waliFormIdentifier].value;
    }

    const formData = {
      siswaData: siswaData,
      ayahData: ayahData,
      ibuData: ibuData,
      waliData: waliData
    };

    props.onDaftarBaru(formData);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const siswaFormElementArray = [];
  const ayahFormElementArray = [];
  const ibuFormElementArray = [];
  const waliFormElementArray = [];

  for (let key in siswaForm) {
    siswaFormElementArray.push({
      id: key,
      config: siswaForm[key]
    });
  }

  for (let key in ayahForm) {
    ayahFormElementArray.push({
      id: key,
      config: ayahForm[key]
    });
  }

  for (let key in ibuForm) {
    ibuFormElementArray.push({
      id: key,
      config: ibuForm[key]
    });
  }

  for (let key in waliForm) {
    waliFormElementArray.push({
      id: key,
      config: waliForm[key]
    });
  }

  let siswaFormElement = (
    <React.Fragment>
      <form onSubmit={submitHandler} className="Form">
        <h3 className="Detail_Title">Detail Siswa</h3>
        {siswaFormElementArray.map(formElement => (
          <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            label={formElement.config.label}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            changed={(event) => siswaChangedHandler(event, formElement.id)} />
        ))}
        <h3 className="Detail_Title">Detail Orang Tua/Wali</h3>
        <h3 className="Detail_Wali">Ayah</h3>
        {ayahFormElementArray.map(formElement => (
          <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            label={formElement.config.label}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            changed={(event) => ayahChangedHandler(event, formElement.id)} />
        ))}
        <h3 className="Detail_Wali">Ibu</h3>
        {ibuFormElementArray.map(formElement => (
          <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            label={formElement.config.label}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            changed={(event) => ibuChangedHandler(event, formElement.id)} />
        ))}
        <h3 className="Detail_Wali">Wali</h3>
        {waliFormElementArray.map(formElement => (
          <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            label={formElement.config.label}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            changed={(event) => waliChangedHandler(event, formElement.id)} />
        ))}
        <Button btnType="Submit" disabled={!formIsValid} >Kirim</Button>
      </form>
    </React.Fragment>
  );

  const { reset, modalToggler } = props;

  useEffect(() => {
    reset();
  }, [reset]);

  const modalTogglerHandler = () => {
    setSiswaForm(resetSiswaForm);
    setAyahForm(resetAyahForm);
    setIbuForm(resetIbuForm);
    setWaliForm(resetWaliForm);
    setFormIsValid(false);
    props.modalTogglerHandler();
  }

  const error = props.error.map(err => (
    <Alert key={err + Date.now()} alertType="Alert-Danger">{props.error[0].join('\n')}</Alert>
  ));

  let pendaftaran = <Spinner />
  if (!props.loading) {
    pendaftaran = (
      <div className="Pendaftaran">
        <h1 className="Title">Pendaftaran Online</h1>
        {error}
        {siswaFormElement}
      </div>
    );
  }

  return (
    <React.Fragment>
      <Modal show={modalToggler} clicked={modalTogglerHandler} >
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="38" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z" /></svg>
        <p>Data berhasil di simpan!</p>
      </Modal>
      {pendaftaran}
    </React.Fragment>
  );
}

const mapStateToProps = state => {
  return {
    loading: state.pendaftaranReducer.loading,
    error: state.pendaftaranReducer.error,
    modalToggler: state.pendaftaranReducer.modalToggler
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onDaftarBaru: (data) => dispatch(actions.daftarBaru(data)),
    reset: () => dispatch(actions.reset()),
    modalTogglerHandler: () => dispatch(actions.modalTogglerHandler())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pendaftaran);