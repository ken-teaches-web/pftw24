module.exports = {

        "plugins": [
            "p5js"
        ],

    "env": {
        "browser": true,
        "es2021": true,
        "p5js/p5": true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:p5js/p5"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "rules": {
    }
}
