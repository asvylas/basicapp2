import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Profile from '@/components/profile/Profile'
import Listings from '@/components/listings/Listings'
import ListingForm from '@/components/listingForm/ListingForm'
import PropertyId from '@/components/singleProperty/PropertyId'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/profile/:id',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/listings',
      name: 'Listings',
      component: Listings
    },
    {
      path: '/listings/:propertyId',
      name: 'PropertyId',
      component: PropertyId
    },
    {
      path: '/newlisting',
      name: 'ListingForm',
      component: ListingForm
    }
  ]
})
