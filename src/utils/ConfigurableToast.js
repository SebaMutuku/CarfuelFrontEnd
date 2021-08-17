import React from 'react';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class ConfigurableToast extends React.Component {
    constructor(props) {
        super(props);
        toast.configure();
    }

    showSuccessToast(message) {
        toast.success(message, {position: toast.POSITION.BOTTOM_RIGHT})

    }

    showErrorToast(message) {
        toast.error(message, {position: toast.POSITION.BOTTOM_RIGHT})

    }

}
