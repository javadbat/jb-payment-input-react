import React, { useRef, useEffect, useState, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import 'jb-payment-input';
import { useEvent } from '../../custom-hooks/UseEvent';

// eslint-disable-next-line react/display-name
const JBPaymentInput = React.forwardRef((props, ref) => {
    /**
     * @type {React.MutableRefObject<HTMLInputElement>}
     */
    const element = useRef();
    const [refChangeCount, refChangeCountSetter] = useState(0);
    useImperativeHandle(
        ref,
        () => (element ? element.current : {}),
        [element],
    );
    useEffect(() => {
        refChangeCountSetter(refChangeCount + 1);
    }, [element.current]);
    function onChange(e) {
        if (props.onChange) {
            props.onChange(e);
        }
    }
    function onKeydown(e) {
        if (props.onKeydown) {
            props.onKeydown(e);
        }
    }
    function onKeyup(e) {
        if (typeof props.onKeyup == "function") {
            props.onKeyup(e);
        }
    }
    function onEnter(e) {
        if (props.onEnter) {
            props.onEnter(e);
        }
    }
    function onFocus(e) {
        if (props.onFocus && e instanceof FocusEvent) {
            props.onFocus(e);
        }
    }
    function onBlur(e) {
        if (props.onBlur && e instanceof FocusEvent) {
            props.onBlur(e);
        }
    }
    function onInput(e) {
        if (typeof props.onInput == 'function' && e instanceof InputEvent) {
            props.onInput(e);
        }
    }
    function onBeforeInput(e) {
        if (typeof props.onBeforeinput == 'function' && e instanceof InputEvent) {
            props.onBeforeinput(e);
        }
    }
    useEffect(() => {
        let value = props.value;
        if (props.value === null || props.value === undefined) {
            value = '';
        }else{
            element.current.value = value;
        }
    }, [props.value]);
    useEffect(() => {
        element.current.setAttribute('input-type', props.inputType);
    }, [props.inputType]);
    useEffect(() => {
        element.current.validationList = props.validationList || [];
    }, [props.validationList]);
    useEffect(() => {
        element.current.setAttribute('direction', props.direction);
    }, [props.direction]);
    useEffect(() => {
        if (typeof props.disabled == "boolean") {
            element.current.setAttribute('disabled', `${props.disabled}`);
        }
    }, [props.disabled]);
    useEffect(() => {
        if(props.inputmode){
            element.current.setAttribute('inputmode',props.inputmode);
        }else{
            element.current.removeAttribute('inputmode');
        }
    }
    , [props.inputmode]);
    useEvent(element.current, 'change', onChange);
    useEvent(element.current, 'input', onInput);
    useEvent(element.current, 'beforeinput', onBeforeInput);
    useEvent(element.current, 'keydown', onKeydown);
    useEvent(element.current, 'keyup', onKeyup);
    useEvent(element.current, 'focus', onFocus);
    useEvent(element.current, 'blur', onBlur);
    useEvent(element.current, 'enter', onEnter);
    return (
        <jb-payment-input placeholder={props.placeholder?props.placeholder:''} ref={element} class={props.className?props.className:''} label={props.label?props.label:''} message={props.message?props.message:''}>
        </jb-payment-input>
    );
});

JBPaymentInput.propTypes = {
    label: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func,
    onKeyup: PropTypes.func,
    onKeydown: PropTypes.func,
    onEnter: PropTypes.func,
    onInput: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onBeforeinput: PropTypes.func,
    className: PropTypes.string,
    validationList: PropTypes.array,
    placeholder: PropTypes.string,
    direction: PropTypes.string,
    numberFieldParameter: PropTypes.object,
    disabled: PropTypes.bool,
    inputmode: PropTypes.string,
    message: PropTypes.string,
    inputType: PropTypes.string
};
JBPaymentInput.displayName = "JBPaymentInput";
export {JBPaymentInput};