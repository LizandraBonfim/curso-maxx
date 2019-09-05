'use strict';

import Session_01 from '../paginas/sessao1/01.js';
import Session_02 from '../paginas/sessao1/02.js';
import Session_03 from '../paginas/sessao1/03.js';
import Session_04 from '../paginas/sessao1/04.js';
import Session_05 from '../paginas/sessao1/05.js';
import Session_06 from '../paginas/sessao1/06.js';
import Session_07 from '../paginas/sessao1/07.js';
import Session_08 from '../paginas/sessao1/08.js';
import Session_09 from '../paginas/sessao1/09.js';

// List of supported routes. Any url other than these routes will throw a 404 error
const Rotas = {
    '/':              Session_01
  , '/session_02':    Session_02
  , '/session_03':    Session_03
  , '/session_04':    Session_04
  , '/session_05':    Session_05
  , '/session_06':    Session_06
  , '/session_07':    Session_07
  , '/session_08':    Session_08
  , '/session_09':    Session_09

  // , '/p/:id'      : PostShow
  // , '/register'   : Register

};

export default Rotas