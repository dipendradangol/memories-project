import { combineReducers } from 'redux';
import posts from './posts';

export default combineReducers({ posts }); // considering both key and value are with same name (posts)