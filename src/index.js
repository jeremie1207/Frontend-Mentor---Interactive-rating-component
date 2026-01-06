import {form, ranks} from './constants/constant.js'
import { formHandler, rankHandler } from './utils/utils.js';


ranks.forEach(rankHandler);
form.addEventListener("submit", formHandler);
