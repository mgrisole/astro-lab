import {copySync} from "fs-extra";

copySync('./generated/client', '../../libs/definitions', {overwrite: false})
