import React from 'react';
// React.createElement
import {
  Redirect
} from 'react-router-dom';
import BlankLayout from '../layout/BlankLayout';
import HomeLayout from '../layout/HomeLayout'
import RecommandComponent from '../application/recommend/index';
import SingersComponent from '../application/singers/index';
import RankComponent from '../application/rank/index';

export default [{
  component: BlankLayout,
  routes: [
    {
      path: '/',
      component: HomeLayout,
      routes: [
        {
          path: '/',
          exact: true,
          render: () => <Redirect to="/recommend" />
        },
        {
          path: '/recommend',
          component: RecommandComponent
        },
        {
          path: '/singers',
          component: SingersComponent
        },
        {
          path: '/rank',
          component: RankComponent
        }
      ]
    }
  ]
}]