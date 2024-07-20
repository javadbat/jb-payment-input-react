import React, { useRef, useEffect, useState, useImperativeHandle } from 'react';
import {type Props as JBInputProps } from 'jb-input-react';
import {useJBInputAttribute } from 'jb-input-react/lib/attributes-hook';
import {useJBInputEvents } from 'jb-input-react/lib/events-hook';
import 'jb-payment-input';
// eslint-disable-next-line no-duplicate-imports
import {JBPaymentInputWebComponent} from 'jb-payment-input';
import {PaymentInputType} from 'jb-payment-input/types';
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'jb-payment-input': JBSearchbarType;
    }
    interface JBSearchbarType extends React.DetailedHTMLProps<React.HTMLAttributes<JBPaymentInputWebComponent>, JBPaymentInputWebComponent> {
      "class"?: string,
      "type"?: string,
      "label"?:string,
      "message"?:string,
      "placeholder"?:string,
    }
  }
}
// eslint-disable-next-line react/display-name
const JBPaymentInput = React.forwardRef((props:Props, ref) => {
  const element = useRef<JBPaymentInputWebComponent>(null);
  const [refChangeCount, refChangeCountSetter] = useState(0);
  useImperativeHandle(
    ref,
    () => (element ? element.current : {}),
    [element],
  );
  useEffect(() => {
    refChangeCountSetter(refChangeCount + 1);
  }, [element.current]);
  useJBInputAttribute(element,props);
  useJBInputEvents(element,props);
  useEffect(() => {
    element.current.setAttribute('input-type', props.inputType);
  }, [props.inputType]);
  useEffect(() => {
    if( props.separator && typeof props.separator === "string" && props.separator !== ""){
      element.current.separatorString = props.separator;
    }
  }, [props.separator]);
  return (
    <jb-payment-input placeholder={props.placeholder?props.placeholder:''} ref={element} class={props.className?props.className:''} label={props.label?props.label:''} message={props.message?props.message:''}>
      {props.children}
    </jb-payment-input>
  );
});

export type Props = JBInputProps & {
  inputType: PaymentInputType,
  separator: string,
};
JBPaymentInput.displayName = "JBPaymentInput";
export {JBPaymentInput};