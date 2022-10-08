<template>
  <div class="hello container">
    <h1>{{ msg }}</h1>
    <Button class="m-2">TESffT</Button>
    <Button class="m-2" type="primary">TEST</Button>
    <Button class="m-2" :loading="true" type="secondary">
      TEf dsqfds fdsf dsf <br />sdfsdffdsf dsf <br />sdfsdffdsf dsf
      <br />sdfsdffdsf dsf <br />sdfsdffdsf dsf <br />sdfsdf
    </Button>

    <Button class="m-2" :loading="true" type="secondary">
      TEf dsqfds fdsf dsf <br />sdfsdffdsf dsf <br />sdfsdffdsf dsf sdfsdffdsf
      dsf <br />sdfsdffdsf
    </Button>
    <Button :loading="true" class="m-2" type="success">
      TEST <br />sdfs dsdfsdffdsf
    </Button>
    <Button class="m-2" type="danger">TEST</Button>
    <Button :loading="true" class="m-2" type="warning"
      >TEfffffffffffffffffffffffffffST</Button
    >

    <Form @submit="handleSubmit">
      <Input name="test1" />
    </Form>

    <Form @submit="handleSubmit">
      <div>
        <div>
          <Input label="test2" name="test2" @change="test" />
        </div>
      </div>
      <Input label="test2" name="test2fsd" />
      <Input label="test2" name="test2fdsfsdf" />
      <Input label="test2" name="tesdsfdsft2" />
      <Button :submit="true" type="primary">envoyer</Button>
    </Form>
  </div>
</template>

<script>
import Button from '@/ui/Button/';
import Form from '@/ui/form/Form';
import Input from '@/ui/form/Input';

export default {
  name: 'HelloWorld',
  components: {Button, Form, Input},
  methods: {
    test(data) {
      console.log(data);
    },
    handleSubmit(data) {
      console.log('handle submit', data);
    },
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
