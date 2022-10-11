# JBPaymentInput React component

this component is React.js wrapper for [jb-payment-input](https://www.npmjs.com/package/jb-payment-input) web component

payment info input `react component` with this benefit:

- easy to add custom regex or function validation.

- multiple validation with different message.

- support both RTL and LTR.

- add label and message in UX friendly format.

- customizable ui with css variable so you can have multiple style in different scope of your app.

- support both card number and shaba number

## install

### using npm

``` command
npm i jb-payment-input-react
```
in your jsx file
```js
import {JBPaymentInput} from 'jb-payment-input-react';
```
``` jsx
<JBPaymentInput  label="card number" inputType="CARD_NUMBER"></JBPaymentInput>
<JBPaymentInput  label="shaba number" inputType="SHABA_NUMBER"></JBPaymentInput>
```


## events
- onChange
```jsx 
    <JBPaymentInput onChange={(event) => console.log(event.target.value)}></JBPaymentInput>
```
- onKeyUp
```jsx 
    <JBPaymentInput onKeyUp={(event) => console.log(event.target.value)}></JBPaymentInput>
```
- onEnter
```jsx 
    <JBPaymentInput onEnter={(event) => console.log(event.target.value)}></JBPaymentInput>
```
- onKeydown
```jsx 
    <JBPaymentInput onKeydown={(event) => console.log(event.target.value)}></JBPaymentInput>
```
- onFocus
```jsx 
    <JBPaymentInput onFocus={(event) => console.log(event.target.value)}></JBPaymentInput>
```
- onBlur
```jsx 
    <JBPaymentInput onBlur={(event) => console.log(event.target.value)}></JBPaymentInput>
```



## set validation

you can set validation to your input by creating a validationList array and passing in to validationList props:

``` javascript
    const validationList = [
        {
            validator: /.{3}/g,
            message: 'عنوان حداقل باید سه کاکتر طول داشته باشد'
        },
        #you can use function as a validator too
        {
            validator: (inputedText)=>{return inputedText == "سلام"},
            message: 'شما تنها میتوانید عبارت سلام را وارد کنید'
        },
    ]
```
```jsx
    <JBPaymentInput validationList={validationList}></JBPaymentInput>
```

## check validation

you can check if an input value meet your validation standad by creating a ref of the element using `React.createRef()`.
```javascript
    const elementRef = React.createRef();
    const isValid = elementRef.current.triggerInputValidation(true).isAllValid;
```
if `isValid` is `true` the value of input is valid.


## other props
|props name | description        |
| --------- | ------------------ |
| disabled	| disable the input  |


## set custom style

in some cases in your project you need to change default style of web-component for example you need zero margin or different border-radius and etc.    
if you want to set a custom style to this web-component all you need is to set css variable in parent scope of web-component.
since jb-payment-input use jb-input underneath, read [jb-input](https://github.com/javadbat/jb-input) custom style list                                                      |
