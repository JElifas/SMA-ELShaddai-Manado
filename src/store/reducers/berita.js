import * as actionTypes from '../actions/actionTypes';

import htmlToDraft from 'html-to-draftjs';
import { EditorState, ContentState } from 'draft-js';

const initialState = {
  berita: [],
  singleBerita: {},
  editorState: EditorState.createEmpty(),
  loading: false,
  error: false
}

const fetchBeritaStart = (state) => {
  return {
    ...state,
    loading: true,
  }
}

const fetchBeritaSuccess = (state, action) => {
  return {
    ...state,
    berita: action.dataBerita,
    loading: false,
  }
}

const fetchSingleBeritaStart = (state) => {
  return {
    ...state,
    loading: true
  }
}

const fetchSingleBeritaSuccess = (state, action) => {
  const draft = htmlToDraft(action.singleBerita.content);
  const contentState = ContentState.createFromBlockArray(draft.contentBlocks, draft.entityMap);
  
  return {
    ...state,
    loading: false,
    singleBerita: action.singleBerita,
    editorState: EditorState.createWithContent(contentState),
  }
}

const fetchSingleBeritaFail = (state) => {
  return {
    ...state,
    loading: false
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_BERITA_START: return fetchBeritaStart(state);
    case actionTypes.FETCH_BERITA_SUCCESS: return fetchBeritaSuccess(state, action);
    
    case actionTypes.FETCH_SINGLE_BERITA_START: return fetchSingleBeritaStart(state);
    case actionTypes.FETCH_SINGLE_BERITA_SUCCESS: return fetchSingleBeritaSuccess(state, action);
    case actionTypes.FETCH_SINGLE_BERITA_FAIL: return fetchSingleBeritaFail(state);

    default:
      return state;
  }
}

export default reducer;