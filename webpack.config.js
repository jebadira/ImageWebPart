//remember to od production sass
module.exports = {
    entry: __dirname + "/src/webparts/imageWebPart/components/ImageContainer.jsx",
    output: {
        path: __dirname + "/src/webparts/imageWebPart/dist/",
        //create duplicate entires for each unique version of the app.
        //filename: "scripts/[name].bundle.js",
        //filename : "scripts/efd8089542d747eb9678fc7785dceaa0.js",
        filename : "scripts/2d4fc094d81f4abbb96abf149608ac51.js",
        library : "2d4fc094d81f4abbb96abf149608ac51",

        //library: "ImageWebPart",
        //library : "efd8089542d747eb9678fc7785dceaa0",
        libraryTarget: "window"
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.less']
    },
    module: {
        rules: [
            {
                test: /.*\.(less)$/i,
                use: [{
                    loader: "style-loader"
                },
                {
                    loader: "css-loader",
                    options: {
                        modules : true
                    }
                }
                ,{
                    loader: "less-loader"
                }
                ]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /.*\.(tsx|jsx|ts|js)$/i,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                ["env", {
                                    "targets": {
                                        "browsers": ["last 3 versions", ">1%"]
                                    },
                                    useBuiltIns: true,
                                }
                                ],
                                ["es2017"],
                                ["es2016"],
                                ["es2015", {"modules" : false}],
                                ["react"],
                            ],
                            plugins: [
                                "transform-es2015-modules-commonjs",
                                "syntax-dynamic-import"
                            ]
                        }
                    }
                ]
            },
        ]
    },
   
    watch: true,
}