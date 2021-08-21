<template>
  <div class='p-3'>
    <div class='row p-2' v-if='!loggedIn && type === "default"'>
      <b-button @click='setType("signin")' variant='primary' class='mb-2'>Signin</b-button>
      <b-button @click='setType("signup")' variant='danger'>Signup</b-button>
    </div>
    <b-form @submit='login' @reset='onReset' v-if='!loggedIn && type === "signin"'>
      <b-form-group
        id='password-group'
        class='mt-2 mb-3 text-center'
        label='Enter your emoji password:'
        label-for='password'
      >
        <tilig-spinner ref='spinner' @password='form.password = $event'></tilig-spinner>
      </b-form-group>

      <b-button type='submit' variant='primary'>Submit</b-button>
      <b-button type='reset' variant='danger'>Reset</b-button>
      <b-button @click='setType("default")' variant='warning'>Back</b-button>
    </b-form>
    <b-form @submit='register' @reset='onReset' v-if='!loggedIn && type === "signup"'>
      <b-form-group
        id='password-group'
        class='mt-2 mb-3 text-center'
        label='Enter your emoji password:'
        label-for='password'
      >
        <tilig-spinner ref='spinner' @password='form.password = $event'></tilig-spinner>
      </b-form-group>

      <b-button type='submit' variant='primary'>Submit</b-button>
      <b-button type='reset' variant='danger'>Reset</b-button>
      <b-button @click='setType("default")' variant='warning'>Back</b-button>
    </b-form>
    <tilig-dashboard v-if='loggedIn'></tilig-dashboard>
  </div>
</template>
<script>
import tiligSpinner from './components/Spinner.vue'
import tiligDashboard from './components/Dashboard.vue'

export default {
  components: {
    tiligSpinner,
    tiligDashboard,
  },
  data() {
    return {
      form: {
        password: [],
      },
      type: 'default',
      loggedIn: false,
    }
  },
  methods: {
    // Check if user is registered and available in local storage.
    login(event) {
      event.preventDefault()
      if (this.form.password.length < 3) {
        alert('Please select 4 emojies')
        return
      }

      let users = JSON.parse(localStorage.getItem('users'))
      let user = users && users.length ? users.find((user) => user.password === this.form.password.join('')) : null;
      if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user))
        this.loggedIn = true
      } else {
        alert('Wrong password provided')
      }
    },
    // Save user to local storage
    register(event) {
      event.preventDefault()
      let users = localStorage.getItem('users') ? [...JSON.parse(localStorage.getItem('users'))] : []
      if (this.form.password.length < 3) {
        alert('Please select 4 emojies')
        return
      }

      // Check if user with same password is already there.
      if(users.find((user)=> user.password === this.form.password.join(''))){
        alert('User already registered with this password, please use another password')
        this.onReset();
        return
      }

      if (localStorage.getItem('users')) {
        users = [...JSON.parse(localStorage.getItem('users'))]
      }

      let currentUser = { password: this.form.password.join(''), data: [] }
      users.push(currentUser)

      localStorage.setItem('users', JSON.stringify(users))
      localStorage.setItem('currentUser', JSON.stringify(currentUser))
      this.loggedIn = true
    },
    // Set form type
    setType(type) {
      this.type = type
    },
    // Reset form
    onReset() {
      this.$refs.spinner.reset()
    },
  },
}
</script>
