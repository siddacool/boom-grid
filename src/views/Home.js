import HomePageContainer from '../containers/HomePageContainer';

export default function () {
  const homePageContainer = HomePageContainer();

  const wrapper = document.getElementById('wrapper');
  wrapper.innerHTML = homePageContainer;
}
