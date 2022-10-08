import ButtonComp from './Button/';
import SpinnerComp from './Spinner/';
import './form/';
import './Prism/';
import BadgeComp from './Badge/';

export default (Vue) => {
  let components = [...ButtonComp, ...SpinnerComp, ...BadgeComp];

  components.forEach(({name, component}) => {
    Vue.component(name, component);
  });
};
