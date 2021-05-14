import React, {Component} from 'react';
import * as d3 from "d3";
import WordCloud from "@nhuson/react-d3-cloud";
import * as d4 from "d3-cloud"

export default class AdsWordCloud extends React.Component {
    constructor(props){
        super(props);
        // this.state = {
        //     adsData: this.props.adsData,
        //     pagesData: this.props.pagesData
        // }
        this.drawChart = this.drawChart.bind(this)
    
    }


    componentDidMount() {
        // console.log(this.state.adsData)
        this.drawChart()
    }

    drawChart() {
        // console.log(this.state.adsData)
        // console.log(this.state.pagesData)

        // let ads_interests_string = this.state.adsData.topics.join(" ")
        // let page_arr = [];
        // for (let i = 0; i < this.state.pagesData.page_likes.length; i++) {
        //     page_arr.push(this.state.pagesData.page_likes[i].name)
        // }
        // let pages_string = page_arr.join(" ");
        
        // //appendix
        // let fontFamily = "sans-serif"
        // let fontScale = 15
        // let rotate = () => 0 // () => (~~(Math.random() * 6) - 3) * 30
        // let padding = 0
        // let height = 500
        // let width = 500

        // let stopwords = new Set("i,me,my,myself,we,us,our,ours,ourselves,you,your,yours,yourself,yourselves,he,him,his,himself,she,her,hers,herself,it,its,itself,they,them,their,theirs,themselves,what,which,who,whom,whose,this,that,these,those,am,is,are,was,were,be,been,being,have,has,had,having,do,does,did,doing,will,would,should,can,could,ought,i'm,you're,he's,she's,it's,we're,they're,i've,you've,we've,they've,i'd,you'd,he'd,she'd,we'd,they'd,i'll,you'll,he'll,she'll,we'll,they'll,isn't,aren't,wasn't,weren't,hasn't,haven't,hadn't,doesn't,don't,didn't,won't,wouldn't,shan't,shouldn't,can't,cannot,couldn't,mustn't,let's,that's,who's,what's,here's,there's,when's,where's,why's,how's,a,an,the,and,but,if,or,because,as,until,while,of,at,by,for,with,about,against,between,into,through,during,before,after,above,below,to,from,up,upon,down,in,out,on,off,over,under,again,further,then,once,here,there,when,where,why,how,all,any,both,each,few,more,most,other,some,such,no,nor,not,only,own,same,so,than,too,very,say,says,said,shall".split(","))

        // let words = ads_interests_string.split(/[\s.]+/g)
        // .map(w => w.replace(/^[“‘"\-—()\[\]{}]+/g, ""))
        // .map(w => w.replace(/[;:.!?()\[\]{},"'’”\-—]+$/g, ""))
        // .map(w => w.replace(/['’]s$/g, ""))
        // .map(w => w.substring(0, 30))
        // .map(w => w.toLowerCase())
        // .filter(w => w && !stopwords.has(w))

        // let words2 = pages_string.split(/[\s.]+/g)
        // .map(w => w.replace(/^[“‘"\-—()\[\]{}]+/g, ""))
        // .map(w => w.replace(/[;:.!?()\[\]{},"'’”\-—]+$/g, ""))
        // .map(w => w.replace(/['’]s$/g, ""))
        // .map(w => w.substring(0, 30))
        // .map(w => w.toLowerCase())
        // .filter(w => w && !stopwords.has(w))

        // let matches = [];
        // words.sort();
        // words2.sort();
        // for(let i = 0; i < words.length; i += 1) {
        //   if(words2.indexOf(words[i]) > -1){
        //     matches.push(words[i]);
        //   }
        // }

        // let uniqueChars = matches.filter((c, index) => {
        //     return matches.indexOf(c) === index;
        //   });

        //  let test = d3.rollups(words2, group => group.length, w => w)
         
        //  words.filter(w => /\W/.test(w))

        //  words2.filter(w => /\W/.test(w))

        //  let data = d3.rollups(words, group => group.length, w => w)
        //  .sort(([, a], [, b]) => d3.descending(a, b))
        //  .slice(0, 250)
        //  .map(([text, value]) => ({text, value}))

        //  let data2 = d3.rollups(words2, group => group.length, w => w)
        //  .sort(([, a], [, b]) => d3.descending(a, b))
        //  .slice(0, 250)
        //  .map(([text, value]) => ({text, value}))

        //  const fontSizeMapper = word => Math.log2(word.value) * 5;

         

         //The viz

    //      const svg = d3.select('#area')
    //      .attr("viewBox", [0, 0, width, height])
    //      .attr("font-family", fontFamily)
    //      .attr("text-anchor", "middle");
   
    //      const cloud = d4.layout.cloud()
    //      .size([width, height])
    //      .words(data.map(d => Object.create(d)))
    //      .padding(padding)
    //      .rotate(rotate)
    //      .font(fontFamily)
    //      .fontSize(d => Math.sqrt(d.value) * fontScale)
    //      .on("word", ({size, x, y, rotate, text}) => {
    //        //test
    //        if (matches.indexOf(text) > -1) {
    //          //In the array!
    //          svg.append("text")
    //            .attr("font-size", size)
    //            .attr("transform", `translate(${x},${y}) rotate(${rotate})`)
    //            .attr("fill", "red")
    //            .text(text);
    //        } else {
    //          svg.append("text")
    //            .attr("font-size", size)
    //            .attr("transform", `translate(${x},${y}) rotate(${rotate})`)
    //            .text(text);
    //        }
    //        //original
    //        /*svg.append("text")
    //            .attr("font-size", size)
    //            .attr("transform", `translate(${x},${y}) rotate(${rotate})`)
    //            .text(text);*/
    //      });
   
    //  cloud.start();
    //  //invalidation.then(() => cloud.stop());
    //  return svg.node();
            
    }


    


    render() {

        let ads_interests_string = JSON.parse(localStorage.getItem('adsState')).topics.join(" ")
        let page_arr = [];
        for (let i = 0; i < JSON.parse(localStorage.getItem('pagesState')).page_likes.length; i++) {
            page_arr.push(JSON.parse(localStorage.getItem('pagesState')).page_likes[i].name)
        }
        let pages_string = page_arr.join(" ");
        
        //appendix
        let fontFamily = "sans-serif"
        let fontScale = 15
        let rotate = () => 0 // () => (~~(Math.random() * 6) - 3) * 30
        let padding = 0
        let height = 500
        let width = 500

        let stopwords = new Set("i,me,my,myself,we,us,our,ours,ourselves,you,your,yours,yourself,yourselves,he,him,his,himself,she,her,hers,herself,it,its,itself,they,them,their,theirs,themselves,what,which,who,whom,whose,this,that,these,those,am,is,are,was,were,be,been,being,have,has,had,having,do,does,did,doing,will,would,should,can,could,ought,i'm,you're,he's,she's,it's,we're,they're,i've,you've,we've,they've,i'd,you'd,he'd,she'd,we'd,they'd,i'll,you'll,he'll,she'll,we'll,they'll,isn't,aren't,wasn't,weren't,hasn't,haven't,hadn't,doesn't,don't,didn't,won't,wouldn't,shan't,shouldn't,can't,cannot,couldn't,mustn't,let's,that's,who's,what's,here's,there's,when's,where's,why's,how's,a,an,the,and,but,if,or,because,as,until,while,of,at,by,for,with,about,against,between,into,through,during,before,after,above,below,to,from,up,upon,down,in,out,on,off,over,under,again,further,then,once,here,there,when,where,why,how,all,any,both,each,few,more,most,other,some,such,no,nor,not,only,own,same,so,than,too,very,say,says,said,shall,&,-,_,/".split(","))

        let words = ads_interests_string.split(/[\s.]+/g)
        .map(w => w.replace(/^[“‘"\-—()\[\]{}]+/g, ""))
        .map(w => w.replace(/[;:.!?()\[\]{},"'’”\-—]+$/g, ""))
        .map(w => w.replace(/['’]s$/g, ""))
        .map(w => w.substring(0, 30))
        .map(w => w.toLowerCase())
        .filter(w => w && !stopwords.has(w) && w.length > 1)

        let words2 = pages_string.split(/[\s.]+/g)
        .map(w => w.replace(/^[“‘"\-—()\[\]{}]+/g, ""))
        .map(w => w.replace(/[;:.!?()\[\]{},"'’”\-—]+$/g, ""))
        .map(w => w.replace(/['’]s$/g, ""))
        .map(w => w.substring(0, 30))
        .map(w => w.toLowerCase())
        .filter(w => w && !stopwords.has(w) && w.length > 1)

        let matches = [];
        words.sort();
        words2.sort();
        for(let i = 0; i < words.length; i += 1) {
          if(words2.indexOf(words[i]) > -1){
            matches.push(words[i]);
          }
        }

        let uniqueChars = matches.filter((c, index) => {
            return matches.indexOf(c) === index;
          });

         let test = d3.rollups(words2, group => group.length, w => w)
         
         words.filter(w => /\W/.test(w))

         words2.filter(w => /\W/.test(w))

         let data = d3.rollups(words, group => group.length, w => w)
         .sort(([, a], [, b]) => d3.descending(a, b))
         .slice(2, 150)
         .map(([text, value]) => ({text, value}))

         let data2 = d3.rollups(words2, group => group.length, w => w)
         .sort(([, a], [, b]) => d3.descending(a, b))
         .slice(2, 150)
         .map(([text, value]) => ({text, value}))

         const fontSizeMapper = word => Math.log2(word.value) * 17;

         function onWordMouseOver() {
            if (matches.indexOf(this.textContent) > -1) {
                let temp = this.textContent
                /*d3.select(this).transition()
                        .duration('50')
                        .attr('opacity', '0');*/
                d3.selectAll("text").filter(function(d) { return this.textContent.match(temp); })
                    .transition()
                    .duration('50')
                    .attr('opacity', '1');
            }
         }

         function onWordMouseOut() {
            d3.selectAll("text").transition()
                     .duration('50')
                     .attr('opacity', '0.5');
         }


        return(
            <div id='wordclouds'>
                <div className='wordcloud'>
                    <h3>Ads Wordcloud</h3>
                    <WordCloud data={data}
                     fontSizeMapper={fontSizeMapper}
                     onWordMouseOut={onWordMouseOut}
                     onWordMouseOver={onWordMouseOver} />
                </div>

                <div className='wordcloud'>
                    <h3>Page Likes Wordcloud</h3>
                    <WordCloud data={data2}
                     fontSizeMapper={fontSizeMapper}
                     onWordMouseOver={onWordMouseOver}
                     onWordMouseOut={onWordMouseOut}
                     />
                </div>
            </div>
        )
    }
}