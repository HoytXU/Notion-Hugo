import { UserConfig } from "./src/config"

const userConfig: UserConfig = {
    mount: {
        manual: false,
        page_url: 'https://www.notion.so/2a001c8b88e44ecab7def1e35e36fd73',
        pages: [
            // {
            //     page_id: '<page_id>',
            //     target_folder: 'path/relative/to/content/folder'
            // }
            {
                page_id: '2d07d713507545e3a2c400c63857d09f',
                target_folder: '.'
            }
        ],
        databases: [
            // {
            //     database_id: '<database_id>',
            //     target_folder: 'path/relative/to/content/folder'
            // }
            {
                database_id: '2a001c8b88e44ecab7def1e35e36fd73',
                target_folder: '.'
            }
        ],
    }
}

export default userConfig;
