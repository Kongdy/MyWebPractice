import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "main_content": {
        "backgroundColor": "#DDDDDD",
        "position": "fixed",
        "overflow": "scroll",
        "top": 3,
        "bottom": 0
    },
    "body": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "backgroundColor": "#DDDDDD"
    },
    "html": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "backgroundColor": "#DDDDDD"
    },
    "nav_guide_ul_style": {
        "backgroundColor": "#333333"
    },
    "nav_guide_ul_style li": {
        "float": "left",
        "marginLeft": 1,
        "marginRight": 1
    },
    "nav_guide_ul_style ul": {
        "float": "right"
    },
    "nav_guide_ul_style a": {
        "color": "white",
        "textDecoration": "none"
    },
    "nav_guide_ul_style a:enabled": {
        "color": "#888888"
    },
    "nav_guide_ul_style img": {
        "width": 10,
        "height": 3
    },
    "main_article_style": {
        "marginTop": 2,
        "marginRight": 2,
        "marginBottom": 2,
        "marginLeft": 2,
        "backgroundColor": "white",
        "paddingTop": 2,
        "paddingRight": 2,
        "paddingBottom": 2,
        "paddingLeft": 2,
        "boxShadow": "5px 5px 5px 2px #ccc"
    },
    "article_title_one": {
        "color": "#353535",
        "fontSize": 2
    },
    "article_title_two": {
        "color": "#888888",
        "fontSize": 1
    },
    "article_author_time": {
        "color": "#888888",
        "fontSize": 0.8
    },
    "main_article_style article": {
        "color": "#333333",
        "fontSize": 1,
        "lineHeight": 2
    },
    "main_article_no_style_img img": {
        "width": 12,
        "height": 12
    },
    "main_article_no_style": {
        "listStyle": "none"
    },
    "main_article_no_style_img li": {
        "listStyle": "none",
        "marginTop": 2
    },
    "main_article_img_div": {
        "width": "auto",
        "height": "auto",
        "border": "0.1rem solid darkgray",
        "paddingTop": 0.5,
        "paddingRight": 0.5,
        "paddingBottom": 0.5,
        "paddingLeft": 0.5,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "display": "inline"
    },
    "main_article_img_div > figcaption": {
        "textAlign": "center",
        "color": "#333333"
    },
    "main_table_style": {
        "borderCollapse": "collapse",
        "border": "none",
        "width": "100%"
    },
    "main_table_style  th": {
        "backgroundColor": "#333333",
        "border": "0.1rem solid #bbb",
        "color": "white"
    },
    "main_table_style td": {
        "border": "0.1rem solid #bbb",
        "color": "#333"
    },
    "main_table_style tfoot": {
        "backgroundColor": "#ddd",
        "fontWeight": "bold"
    },
    "main_last_title": {
        "fontSize": 1.9,
        "fontWeight": "bold",
        "paddingLeft": 0.4,
        "borderLeft": "4px solid darkgray"
    },
    "main_aside_div_style p": {
        "color": "#bbb",
        "textAlign": "left",
        "marginLeft": 20
    },
    "main_aside_style": {
        "marginLeft": "auto",
        "marginRight": "auto",
        "left": 0,
        "right": 0,
        "border": 0
    },
    "main_aside_div_style": {
        "align": "center",
        "border": 0,
        "marginLeft": "10%"
    },
    "tip_label": {
        "display": "inline-block",
        "textAlign": "right",
        "width": 20,
        "verticalAlign": "top"
    },
    "main_aside_div_style label": {
        "verticalAlign": "text-top"
    },
    "main_aside_div_style input": {
        "textAlign": "left",
        "verticalAlign": "middle"
    },
    "main_aside_style input[type=submit]": {
        "backgroundColor": "#3355CF",
        "width": "100%",
        "fontSize": 1.5,
        "color": "white",
        "border": "none",
        "borderRadius": 0.4,
        "paddingTop": 0.4,
        "paddingBottom": 0.4
    },
    "main_aside_style textarea": {
        "verticalAlign": "text-top",
        "marginBottom": 2,
        "width": "60%"
    },
    "footer": {
        "backgroundColor": "black",
        "color": "white",
        "textAlign": "center",
        "paddingTop": 2,
        "paddingRight": 2,
        "paddingBottom": 2,
        "paddingLeft": 2,
        "fontWeight": "bold"
    }
});