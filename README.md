
# Vue Log Directive

![version](https://img.shields.io/badge/version-1.0.0-blue)

Vue Log Directive is a Vue.js (2.x & 3.x) custom directive that provides an easy way to log your data to the console.

## Installation

Using npm:

`npm install vue-log-directive` 

Using yarn:

`yarn add vue-log-directive` 

## Usage

`import { createApp } from 'vue';
import VueLogDirective from 'vue-log-directive';

createApp(App).use(VueLogDirective).mount('#app');` 

After installing and importing `vue-log-directive`, you can use the `v-log` directive in your templates:

```vue
<!-- Default log -->
<div v-log="message"></div>

<!-- Table log -->
<div v-log.table="myArray"></div>

<!-- Warning log -->
<div v-log.warn="warningMessage"></div>

<!-- Error log -->
<div v-log.error="errorMessage"></div>

<!-- Multiple log styles -->
<div v-log.log.table.warn.error="errorMessage"></div>
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Features

-   Easy-to-use: simply add the directive to your Vue components and pass in the message you want to log.
-   Customisable: modify the log type by using the corresponding console method as a modifier.
-   Compatibility: works **ONLY** with Vue 3.

## Documentation

The `v-log` directive logs the passed value to the console. By default, it uses `console.log`, but you can modify this behaviour by using a modifier that matches a console method:

-   `v-log` logs the value using `console.log`.
-   `v-log.table` logs the value using `console.table`.
-   `v-log.warn` logs the value using `console.warn`.
-   `v-log.error` logs the value using `console.error`.

## Example

```vue
<template>
  <div>
    <button @click="message = 'Hello, world!'" v-log="message">Log message</button>
    <button @click="tableData = [{ id: 1, name: 'John Doe' }]" v-log.table="tableData">Log table data</button>
    <button @click="warning = 'This is a warning!'" v-log.warn="warning">Log warning</button>
    <button @click="error = 'This is an error!'" v-log.error="error">Log error</button>
  </div>
</template>

<script> export default {
  data() {
    return {
      message: '',
      tableData: [],
      warning: '',
      error: '',
    };
  },
}; </script>
```

## Support

If you have any questions or issues with the Vue Log Directive, please open an issue on the GitHub repository. We'll do our best to resolve any issues as quickly as possible.

## Authors

-   [Kani Robinson](https://github.com/kanirobinson)

## Acknowledgements

Thank you to everyone who has contributed to this project, submitted an issue, or made a feature request.