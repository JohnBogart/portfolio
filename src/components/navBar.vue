<template>
    <b-navbar type="is-black">
        <template slot="brand">
          <b-navbar-item tag="router-link" :to="{ path: '/' }">
              John Bogart
          </b-navbar-item>
        </template>
        <template slot="start" type="is-black">
          <b-navbar-item href="/">
              Home
          </b-navbar-item>
          <b-navbar-item href="/swansdom">
              Swansdom
          </b-navbar-item>
            <b-navbar-item href="/schwifty">
              Schwifty
          </b-navbar-item>
        </template>
    </b-navbar>
</template>