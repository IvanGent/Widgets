import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

const Folder = (props) => {
  return (
    <BrowserRouter>
      <div>
        <h1>Tabs</h1>
        <div className='tabs'>
          <ul className='tab-header'>
            {props.folders.map(folder => <li><NavLink key={folder.title} to={`/tabs/${folder.title}`} >{folder.title}</NavLink></li>)}
          </ul>
          <Switch>
            {props.folders.map(folder => {
              return (
                <Route path={`/tabs/${folder.title}`} key={folder.title} >
                  <div className='tab-content'>
                    {folder.content}
                  </div>
                </Route>
              )
            })}
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default Folder;
