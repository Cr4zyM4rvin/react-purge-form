# PurgeForm

PurgeForm support for React Native easy form validation and controlling .

## Feature

### Formdata & set

- formdata : default data for your form
- set : set data for form field

```
import Form from 'purge-form'
import { TextInput} from 'react-native'

<Form formdata={{name: 'JohnDoe', age: 22}}>
  {
    ({set}) => (
      <>
        <TextInput onChange={e => set('name', e)} />
      </>
    )
  }
</Form>
```

### Purger

Purification(Validation) rules

```
import Form from 'purge-form'
import { TextInput} from 'react-native'

const isEmail = e => e.match(
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);
isEmail.message = 'is not valid email address' //- custom error message

<Form
purger={{
  email: [isEmail]
}}
formdata={{name: 'JohnDoe'}}>
  {
    ({set}) => (
      <>
        <TextInput onChange={e => set('email', e)} />
      </>
    )
  }
</Form>
```

## Props

PurgeForm also support some useful properties such as

- values : returned values for your form
- set : set value for your form field
- purging : bool (if validation fail return `true` else `false`)
- onDataChange : return form data when a data is change

```
import From from 'rn-purge-form'
...
<Form
  purger={{
    name: [notEmpty, notHello]
  }}
>
  {({ values, set, purging, onDataChange }) => (
    <View>
      <Text>Name</Text>
      <TextInput
        onChangeText={e => set('name', e)}
      />
      {values.name?.purged && <Text>{values.name.purged.message}</Text>}

      <Text>Email</Text>
      <TextInput
        onChangeText={e => set('email', e)}
      />
      {values.email?.purged && <Text>{values.email.purged.message}</Text>}

      <TouchableOpacity onPress={_ => console.log(purging())}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  )}
</Form>
```
