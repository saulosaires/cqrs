/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 2.0, "minX": 0.0, "maxY": 362.0, "series": [{"data": [[0.0, 2.0], [0.1, 4.0], [0.2, 4.0], [0.3, 4.0], [0.4, 4.0], [0.5, 4.0], [0.6, 5.0], [0.7, 5.0], [0.8, 5.0], [0.9, 5.0], [1.0, 5.0], [1.1, 5.0], [1.2, 5.0], [1.3, 5.0], [1.4, 5.0], [1.5, 5.0], [1.6, 5.0], [1.7, 5.0], [1.8, 5.0], [1.9, 5.0], [2.0, 5.0], [2.1, 5.0], [2.2, 5.0], [2.3, 5.0], [2.4, 6.0], [2.5, 6.0], [2.6, 6.0], [2.7, 6.0], [2.8, 6.0], [2.9, 6.0], [3.0, 6.0], [3.1, 6.0], [3.2, 6.0], [3.3, 6.0], [3.4, 6.0], [3.5, 6.0], [3.6, 6.0], [3.7, 6.0], [3.8, 6.0], [3.9, 6.0], [4.0, 6.0], [4.1, 6.0], [4.2, 6.0], [4.3, 6.0], [4.4, 7.0], [4.5, 7.0], [4.6, 7.0], [4.7, 7.0], [4.8, 7.0], [4.9, 7.0], [5.0, 7.0], [5.1, 7.0], [5.2, 7.0], [5.3, 7.0], [5.4, 7.0], [5.5, 7.0], [5.6, 7.0], [5.7, 7.0], [5.8, 7.0], [5.9, 7.0], [6.0, 7.0], [6.1, 7.0], [6.2, 7.0], [6.3, 7.0], [6.4, 7.0], [6.5, 7.0], [6.6, 8.0], [6.7, 8.0], [6.8, 8.0], [6.9, 8.0], [7.0, 8.0], [7.1, 8.0], [7.2, 8.0], [7.3, 8.0], [7.4, 8.0], [7.5, 8.0], [7.6, 8.0], [7.7, 8.0], [7.8, 8.0], [7.9, 8.0], [8.0, 8.0], [8.1, 8.0], [8.2, 9.0], [8.3, 9.0], [8.4, 9.0], [8.5, 9.0], [8.6, 9.0], [8.7, 9.0], [8.8, 9.0], [8.9, 9.0], [9.0, 9.0], [9.1, 9.0], [9.2, 9.0], [9.3, 9.0], [9.4, 10.0], [9.5, 10.0], [9.6, 10.0], [9.7, 10.0], [9.8, 10.0], [9.9, 10.0], [10.0, 10.0], [10.1, 10.0], [10.2, 10.0], [10.3, 11.0], [10.4, 11.0], [10.5, 11.0], [10.6, 11.0], [10.7, 11.0], [10.8, 11.0], [10.9, 12.0], [11.0, 12.0], [11.1, 12.0], [11.2, 12.0], [11.3, 13.0], [11.4, 13.0], [11.5, 13.0], [11.6, 13.0], [11.7, 13.0], [11.8, 13.0], [11.9, 14.0], [12.0, 14.0], [12.1, 14.0], [12.2, 15.0], [12.3, 15.0], [12.4, 15.0], [12.5, 15.0], [12.6, 15.0], [12.7, 16.0], [12.8, 16.0], [12.9, 17.0], [13.0, 17.0], [13.1, 18.0], [13.2, 18.0], [13.3, 19.0], [13.4, 19.0], [13.5, 20.0], [13.6, 20.0], [13.7, 21.0], [13.8, 21.0], [13.9, 21.0], [14.0, 21.0], [14.1, 22.0], [14.2, 22.0], [14.3, 22.0], [14.4, 23.0], [14.5, 23.0], [14.6, 23.0], [14.7, 23.0], [14.8, 23.0], [14.9, 24.0], [15.0, 24.0], [15.1, 24.0], [15.2, 25.0], [15.3, 25.0], [15.4, 25.0], [15.5, 26.0], [15.6, 26.0], [15.7, 26.0], [15.8, 27.0], [15.9, 27.0], [16.0, 27.0], [16.1, 28.0], [16.2, 28.0], [16.3, 29.0], [16.4, 29.0], [16.5, 29.0], [16.6, 30.0], [16.7, 30.0], [16.8, 31.0], [16.9, 31.0], [17.0, 32.0], [17.1, 32.0], [17.2, 33.0], [17.3, 33.0], [17.4, 33.0], [17.5, 34.0], [17.6, 34.0], [17.7, 35.0], [17.8, 35.0], [17.9, 36.0], [18.0, 37.0], [18.1, 38.0], [18.2, 38.0], [18.3, 38.0], [18.4, 38.0], [18.5, 39.0], [18.6, 39.0], [18.7, 39.0], [18.8, 39.0], [18.9, 39.0], [19.0, 40.0], [19.1, 40.0], [19.2, 40.0], [19.3, 40.0], [19.4, 40.0], [19.5, 41.0], [19.6, 41.0], [19.7, 41.0], [19.8, 41.0], [19.9, 41.0], [20.0, 41.0], [20.1, 41.0], [20.2, 41.0], [20.3, 42.0], [20.4, 42.0], [20.5, 42.0], [20.6, 42.0], [20.7, 42.0], [20.8, 42.0], [20.9, 42.0], [21.0, 42.0], [21.1, 43.0], [21.2, 43.0], [21.3, 43.0], [21.4, 43.0], [21.5, 43.0], [21.6, 43.0], [21.7, 43.0], [21.8, 43.0], [21.9, 43.0], [22.0, 43.0], [22.1, 44.0], [22.2, 44.0], [22.3, 44.0], [22.4, 44.0], [22.5, 44.0], [22.6, 44.0], [22.7, 44.0], [22.8, 44.0], [22.9, 44.0], [23.0, 44.0], [23.1, 45.0], [23.2, 45.0], [23.3, 45.0], [23.4, 45.0], [23.5, 45.0], [23.6, 45.0], [23.7, 45.0], [23.8, 45.0], [23.9, 45.0], [24.0, 45.0], [24.1, 46.0], [24.2, 46.0], [24.3, 46.0], [24.4, 46.0], [24.5, 46.0], [24.6, 46.0], [24.7, 46.0], [24.8, 46.0], [24.9, 46.0], [25.0, 46.0], [25.1, 46.0], [25.2, 46.0], [25.3, 46.0], [25.4, 47.0], [25.5, 47.0], [25.6, 47.0], [25.7, 47.0], [25.8, 47.0], [25.9, 47.0], [26.0, 47.0], [26.1, 47.0], [26.2, 47.0], [26.3, 47.0], [26.4, 47.0], [26.5, 47.0], [26.6, 47.0], [26.7, 47.0], [26.8, 47.0], [26.9, 48.0], [27.0, 48.0], [27.1, 48.0], [27.2, 48.0], [27.3, 48.0], [27.4, 48.0], [27.5, 48.0], [27.6, 48.0], [27.7, 48.0], [27.8, 48.0], [27.9, 48.0], [28.0, 48.0], [28.1, 48.0], [28.2, 48.0], [28.3, 48.0], [28.4, 49.0], [28.5, 49.0], [28.6, 49.0], [28.7, 49.0], [28.8, 49.0], [28.9, 49.0], [29.0, 49.0], [29.1, 49.0], [29.2, 49.0], [29.3, 49.0], [29.4, 49.0], [29.5, 49.0], [29.6, 49.0], [29.7, 49.0], [29.8, 49.0], [29.9, 49.0], [30.0, 50.0], [30.1, 50.0], [30.2, 50.0], [30.3, 50.0], [30.4, 50.0], [30.5, 50.0], [30.6, 50.0], [30.7, 50.0], [30.8, 50.0], [30.9, 50.0], [31.0, 50.0], [31.1, 50.0], [31.2, 50.0], [31.3, 50.0], [31.4, 51.0], [31.5, 51.0], [31.6, 51.0], [31.7, 51.0], [31.8, 51.0], [31.9, 51.0], [32.0, 51.0], [32.1, 51.0], [32.2, 51.0], [32.3, 51.0], [32.4, 51.0], [32.5, 51.0], [32.6, 51.0], [32.7, 51.0], [32.8, 51.0], [32.9, 52.0], [33.0, 52.0], [33.1, 52.0], [33.2, 52.0], [33.3, 52.0], [33.4, 52.0], [33.5, 52.0], [33.6, 52.0], [33.7, 52.0], [33.8, 52.0], [33.9, 52.0], [34.0, 52.0], [34.1, 53.0], [34.2, 53.0], [34.3, 53.0], [34.4, 53.0], [34.5, 53.0], [34.6, 53.0], [34.7, 53.0], [34.8, 53.0], [34.9, 53.0], [35.0, 53.0], [35.1, 53.0], [35.2, 53.0], [35.3, 54.0], [35.4, 54.0], [35.5, 54.0], [35.6, 54.0], [35.7, 54.0], [35.8, 54.0], [35.9, 54.0], [36.0, 54.0], [36.1, 54.0], [36.2, 54.0], [36.3, 54.0], [36.4, 54.0], [36.5, 54.0], [36.6, 55.0], [36.7, 55.0], [36.8, 55.0], [36.9, 55.0], [37.0, 55.0], [37.1, 55.0], [37.2, 55.0], [37.3, 55.0], [37.4, 55.0], [37.5, 55.0], [37.6, 55.0], [37.7, 55.0], [37.8, 55.0], [37.9, 55.0], [38.0, 56.0], [38.1, 56.0], [38.2, 56.0], [38.3, 56.0], [38.4, 56.0], [38.5, 56.0], [38.6, 56.0], [38.7, 56.0], [38.8, 56.0], [38.9, 56.0], [39.0, 56.0], [39.1, 56.0], [39.2, 56.0], [39.3, 56.0], [39.4, 56.0], [39.5, 57.0], [39.6, 57.0], [39.7, 57.0], [39.8, 57.0], [39.9, 57.0], [40.0, 57.0], [40.1, 57.0], [40.2, 57.0], [40.3, 57.0], [40.4, 57.0], [40.5, 57.0], [40.6, 57.0], [40.7, 58.0], [40.8, 58.0], [40.9, 58.0], [41.0, 58.0], [41.1, 58.0], [41.2, 58.0], [41.3, 58.0], [41.4, 58.0], [41.5, 58.0], [41.6, 58.0], [41.7, 58.0], [41.8, 58.0], [41.9, 58.0], [42.0, 58.0], [42.1, 58.0], [42.2, 58.0], [42.3, 58.0], [42.4, 59.0], [42.5, 59.0], [42.6, 59.0], [42.7, 59.0], [42.8, 59.0], [42.9, 59.0], [43.0, 59.0], [43.1, 59.0], [43.2, 59.0], [43.3, 59.0], [43.4, 59.0], [43.5, 59.0], [43.6, 59.0], [43.7, 59.0], [43.8, 59.0], [43.9, 59.0], [44.0, 59.0], [44.1, 59.0], [44.2, 60.0], [44.3, 60.0], [44.4, 60.0], [44.5, 60.0], [44.6, 60.0], [44.7, 60.0], [44.8, 60.0], [44.9, 60.0], [45.0, 60.0], [45.1, 60.0], [45.2, 60.0], [45.3, 60.0], [45.4, 60.0], [45.5, 60.0], [45.6, 60.0], [45.7, 60.0], [45.8, 60.0], [45.9, 60.0], [46.0, 60.0], [46.1, 60.0], [46.2, 60.0], [46.3, 60.0], [46.4, 61.0], [46.5, 61.0], [46.6, 61.0], [46.7, 61.0], [46.8, 61.0], [46.9, 61.0], [47.0, 61.0], [47.1, 61.0], [47.2, 61.0], [47.3, 61.0], [47.4, 61.0], [47.5, 61.0], [47.6, 61.0], [47.7, 61.0], [47.8, 61.0], [47.9, 61.0], [48.0, 61.0], [48.1, 61.0], [48.2, 61.0], [48.3, 61.0], [48.4, 61.0], [48.5, 61.0], [48.6, 61.0], [48.7, 61.0], [48.8, 61.0], [48.9, 61.0], [49.0, 61.0], [49.1, 62.0], [49.2, 62.0], [49.3, 62.0], [49.4, 62.0], [49.5, 62.0], [49.6, 62.0], [49.7, 62.0], [49.8, 62.0], [49.9, 62.0], [50.0, 62.0], [50.1, 62.0], [50.2, 62.0], [50.3, 62.0], [50.4, 62.0], [50.5, 62.0], [50.6, 62.0], [50.7, 62.0], [50.8, 62.0], [50.9, 62.0], [51.0, 62.0], [51.1, 62.0], [51.2, 62.0], [51.3, 62.0], [51.4, 62.0], [51.5, 62.0], [51.6, 63.0], [51.7, 63.0], [51.8, 63.0], [51.9, 63.0], [52.0, 63.0], [52.1, 63.0], [52.2, 63.0], [52.3, 63.0], [52.4, 63.0], [52.5, 63.0], [52.6, 63.0], [52.7, 63.0], [52.8, 63.0], [52.9, 63.0], [53.0, 63.0], [53.1, 63.0], [53.2, 63.0], [53.3, 63.0], [53.4, 63.0], [53.5, 63.0], [53.6, 63.0], [53.7, 63.0], [53.8, 63.0], [53.9, 63.0], [54.0, 63.0], [54.1, 63.0], [54.2, 63.0], [54.3, 63.0], [54.4, 63.0], [54.5, 64.0], [54.6, 64.0], [54.7, 64.0], [54.8, 64.0], [54.9, 64.0], [55.0, 64.0], [55.1, 64.0], [55.2, 64.0], [55.3, 64.0], [55.4, 64.0], [55.5, 64.0], [55.6, 64.0], [55.7, 64.0], [55.8, 64.0], [55.9, 64.0], [56.0, 64.0], [56.1, 64.0], [56.2, 64.0], [56.3, 64.0], [56.4, 64.0], [56.5, 64.0], [56.6, 64.0], [56.7, 64.0], [56.8, 65.0], [56.9, 65.0], [57.0, 65.0], [57.1, 65.0], [57.2, 65.0], [57.3, 65.0], [57.4, 65.0], [57.5, 65.0], [57.6, 65.0], [57.7, 65.0], [57.8, 65.0], [57.9, 65.0], [58.0, 65.0], [58.1, 65.0], [58.2, 65.0], [58.3, 65.0], [58.4, 65.0], [58.5, 65.0], [58.6, 65.0], [58.7, 65.0], [58.8, 65.0], [58.9, 65.0], [59.0, 65.0], [59.1, 65.0], [59.2, 65.0], [59.3, 66.0], [59.4, 66.0], [59.5, 66.0], [59.6, 66.0], [59.7, 66.0], [59.8, 66.0], [59.9, 66.0], [60.0, 66.0], [60.1, 66.0], [60.2, 66.0], [60.3, 66.0], [60.4, 66.0], [60.5, 66.0], [60.6, 66.0], [60.7, 66.0], [60.8, 66.0], [60.9, 66.0], [61.0, 66.0], [61.1, 66.0], [61.2, 66.0], [61.3, 66.0], [61.4, 66.0], [61.5, 66.0], [61.6, 66.0], [61.7, 66.0], [61.8, 66.0], [61.9, 66.0], [62.0, 66.0], [62.1, 67.0], [62.2, 67.0], [62.3, 67.0], [62.4, 67.0], [62.5, 67.0], [62.6, 67.0], [62.7, 67.0], [62.8, 67.0], [62.9, 67.0], [63.0, 67.0], [63.1, 67.0], [63.2, 67.0], [63.3, 67.0], [63.4, 67.0], [63.5, 67.0], [63.6, 67.0], [63.7, 67.0], [63.8, 67.0], [63.9, 67.0], [64.0, 67.0], [64.1, 67.0], [64.2, 67.0], [64.3, 67.0], [64.4, 68.0], [64.5, 68.0], [64.6, 68.0], [64.7, 68.0], [64.8, 68.0], [64.9, 68.0], [65.0, 68.0], [65.1, 68.0], [65.2, 68.0], [65.3, 68.0], [65.4, 68.0], [65.5, 68.0], [65.6, 68.0], [65.7, 68.0], [65.8, 68.0], [65.9, 68.0], [66.0, 68.0], [66.1, 68.0], [66.2, 68.0], [66.3, 68.0], [66.4, 68.0], [66.5, 68.0], [66.6, 68.0], [66.7, 69.0], [66.8, 69.0], [66.9, 69.0], [67.0, 69.0], [67.1, 69.0], [67.2, 69.0], [67.3, 69.0], [67.4, 69.0], [67.5, 69.0], [67.6, 69.0], [67.7, 69.0], [67.8, 69.0], [67.9, 69.0], [68.0, 69.0], [68.1, 69.0], [68.2, 69.0], [68.3, 69.0], [68.4, 69.0], [68.5, 69.0], [68.6, 70.0], [68.7, 70.0], [68.8, 70.0], [68.9, 70.0], [69.0, 70.0], [69.1, 70.0], [69.2, 70.0], [69.3, 70.0], [69.4, 70.0], [69.5, 70.0], [69.6, 70.0], [69.7, 70.0], [69.8, 70.0], [69.9, 70.0], [70.0, 70.0], [70.1, 70.0], [70.2, 70.0], [70.3, 70.0], [70.4, 70.0], [70.5, 70.0], [70.6, 70.0], [70.7, 71.0], [70.8, 71.0], [70.9, 71.0], [71.0, 71.0], [71.1, 71.0], [71.2, 71.0], [71.3, 71.0], [71.4, 71.0], [71.5, 71.0], [71.6, 71.0], [71.7, 71.0], [71.8, 71.0], [71.9, 71.0], [72.0, 71.0], [72.1, 71.0], [72.2, 71.0], [72.3, 71.0], [72.4, 71.0], [72.5, 71.0], [72.6, 71.0], [72.7, 72.0], [72.8, 72.0], [72.9, 72.0], [73.0, 72.0], [73.1, 72.0], [73.2, 72.0], [73.3, 72.0], [73.4, 72.0], [73.5, 72.0], [73.6, 72.0], [73.7, 72.0], [73.8, 72.0], [73.9, 72.0], [74.0, 72.0], [74.1, 72.0], [74.2, 72.0], [74.3, 72.0], [74.4, 72.0], [74.5, 72.0], [74.6, 72.0], [74.7, 73.0], [74.8, 73.0], [74.9, 73.0], [75.0, 73.0], [75.1, 73.0], [75.2, 73.0], [75.3, 73.0], [75.4, 73.0], [75.5, 73.0], [75.6, 73.0], [75.7, 73.0], [75.8, 73.0], [75.9, 73.0], [76.0, 73.0], [76.1, 73.0], [76.2, 74.0], [76.3, 74.0], [76.4, 74.0], [76.5, 74.0], [76.6, 74.0], [76.7, 74.0], [76.8, 74.0], [76.9, 74.0], [77.0, 74.0], [77.1, 74.0], [77.2, 74.0], [77.3, 74.0], [77.4, 74.0], [77.5, 74.0], [77.6, 75.0], [77.7, 75.0], [77.8, 75.0], [77.9, 75.0], [78.0, 75.0], [78.1, 75.0], [78.2, 75.0], [78.3, 75.0], [78.4, 75.0], [78.5, 76.0], [78.6, 76.0], [78.7, 76.0], [78.8, 76.0], [78.9, 76.0], [79.0, 76.0], [79.1, 76.0], [79.2, 76.0], [79.3, 76.0], [79.4, 77.0], [79.5, 77.0], [79.6, 77.0], [79.7, 77.0], [79.8, 77.0], [79.9, 77.0], [80.0, 78.0], [80.1, 78.0], [80.2, 78.0], [80.3, 78.0], [80.4, 78.0], [80.5, 79.0], [80.6, 79.0], [80.7, 79.0], [80.8, 79.0], [80.9, 79.0], [81.0, 80.0], [81.1, 80.0], [81.2, 80.0], [81.3, 80.0], [81.4, 80.0], [81.5, 81.0], [81.6, 81.0], [81.7, 81.0], [81.8, 81.0], [81.9, 81.0], [82.0, 82.0], [82.1, 82.0], [82.2, 82.0], [82.3, 82.0], [82.4, 82.0], [82.5, 82.0], [82.6, 83.0], [82.7, 83.0], [82.8, 83.0], [82.9, 84.0], [83.0, 84.0], [83.1, 84.0], [83.2, 85.0], [83.3, 85.0], [83.4, 85.0], [83.5, 85.0], [83.6, 86.0], [83.7, 86.0], [83.8, 86.0], [83.9, 86.0], [84.0, 87.0], [84.1, 87.0], [84.2, 87.0], [84.3, 88.0], [84.4, 88.0], [84.5, 88.0], [84.6, 88.0], [84.7, 88.0], [84.8, 89.0], [84.9, 89.0], [85.0, 89.0], [85.1, 90.0], [85.2, 90.0], [85.3, 90.0], [85.4, 90.0], [85.5, 90.0], [85.6, 91.0], [85.7, 91.0], [85.8, 91.0], [85.9, 92.0], [86.0, 92.0], [86.1, 92.0], [86.2, 93.0], [86.3, 93.0], [86.4, 93.0], [86.5, 93.0], [86.6, 94.0], [86.7, 94.0], [86.8, 94.0], [86.9, 95.0], [87.0, 95.0], [87.1, 95.0], [87.2, 96.0], [87.3, 96.0], [87.4, 97.0], [87.5, 97.0], [87.6, 97.0], [87.7, 97.0], [87.8, 98.0], [87.9, 98.0], [88.0, 98.0], [88.1, 99.0], [88.2, 99.0], [88.3, 99.0], [88.4, 100.0], [88.5, 100.0], [88.6, 101.0], [88.7, 101.0], [88.8, 102.0], [88.9, 102.0], [89.0, 103.0], [89.1, 104.0], [89.2, 104.0], [89.3, 105.0], [89.4, 106.0], [89.5, 106.0], [89.6, 106.0], [89.7, 107.0], [89.8, 107.0], [89.9, 108.0], [90.0, 109.0], [90.1, 109.0], [90.2, 110.0], [90.3, 110.0], [90.4, 111.0], [90.5, 111.0], [90.6, 112.0], [90.7, 112.0], [90.8, 112.0], [90.9, 113.0], [91.0, 113.0], [91.1, 113.0], [91.2, 113.0], [91.3, 114.0], [91.4, 114.0], [91.5, 114.0], [91.6, 114.0], [91.7, 115.0], [91.8, 115.0], [91.9, 115.0], [92.0, 115.0], [92.1, 116.0], [92.2, 116.0], [92.3, 116.0], [92.4, 116.0], [92.5, 116.0], [92.6, 117.0], [92.7, 117.0], [92.8, 117.0], [92.9, 118.0], [93.0, 118.0], [93.1, 119.0], [93.2, 119.0], [93.3, 119.0], [93.4, 119.0], [93.5, 120.0], [93.6, 120.0], [93.7, 120.0], [93.8, 121.0], [93.9, 121.0], [94.0, 121.0], [94.1, 122.0], [94.2, 122.0], [94.3, 123.0], [94.4, 123.0], [94.5, 123.0], [94.6, 124.0], [94.7, 124.0], [94.8, 124.0], [94.9, 125.0], [95.0, 125.0], [95.1, 125.0], [95.2, 125.0], [95.3, 126.0], [95.4, 126.0], [95.5, 126.0], [95.6, 127.0], [95.7, 127.0], [95.8, 127.0], [95.9, 128.0], [96.0, 129.0], [96.1, 129.0], [96.2, 130.0], [96.3, 131.0], [96.4, 131.0], [96.5, 132.0], [96.6, 132.0], [96.7, 133.0], [96.8, 134.0], [96.9, 134.0], [97.0, 134.0], [97.1, 135.0], [97.2, 136.0], [97.3, 136.0], [97.4, 137.0], [97.5, 138.0], [97.6, 140.0], [97.7, 141.0], [97.8, 143.0], [97.9, 145.0], [98.0, 150.0], [98.1, 154.0], [98.2, 155.0], [98.3, 158.0], [98.4, 162.0], [98.5, 170.0], [98.6, 175.0], [98.7, 176.0], [98.8, 177.0], [98.9, 179.0], [99.0, 181.0], [99.1, 184.0], [99.2, 187.0], [99.3, 193.0], [99.4, 197.0], [99.5, 200.0], [99.6, 204.0], [99.7, 214.0], [99.8, 226.0], [99.9, 289.0], [100.0, 362.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 2.0, "minX": 0.0, "maxY": 8833.0, "series": [{"data": [[0.0, 8833.0], [300.0, 2.0], [100.0, 1116.0], [200.0, 49.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 300.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 10000.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 10000.0, "series": [{"data": [[0.0, 10000.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 91.46610000000004, "minX": 1.68908826E12, "maxY": 91.46610000000004, "series": [{"data": [[1.68908826E12, 91.46610000000004]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68908826E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 3.0, "minX": 1.0, "maxY": 97.14285714285714, "series": [{"data": [[2.0, 3.3333333333333335], [3.0, 3.0], [4.0, 5.0], [5.0, 4.75], [6.0, 5.25], [7.0, 6.0], [9.0, 6.0], [10.0, 6.0], [11.0, 5.666666666666667], [12.0, 7.6], [13.0, 8.4], [14.0, 9.0], [15.0, 8.8], [16.0, 9.333333333333334], [17.0, 10.0], [18.0, 33.81818181818182], [19.0, 9.124999999999998], [20.0, 11.533333333333331], [21.0, 14.499999999999998], [22.0, 19.88888888888889], [23.0, 14.066666666666668], [24.0, 14.794871794871797], [25.0, 19.94736842105263], [26.0, 18.11764705882353], [27.0, 16.461538461538463], [28.0, 16.95238095238095], [29.0, 26.599999999999998], [30.0, 23.39130434782609], [31.0, 18.19047619047619], [32.0, 21.37931034482758], [33.0, 23.125000000000007], [34.0, 23.27777777777778], [35.0, 22.476190476190474], [36.0, 28.636363636363637], [37.0, 27.2], [38.0, 20.454545454545453], [39.0, 20.5609756097561], [40.0, 25.7], [41.0, 23.571428571428573], [42.0, 24.7], [43.0, 25.689655172413797], [44.0, 31.21428571428572], [45.0, 27.814814814814817], [46.0, 29.2], [47.0, 28.333333333333332], [48.0, 30.64285714285715], [49.0, 27.083333333333332], [50.0, 37.14999999999999], [51.0, 31.833333333333332], [52.0, 37.50000000000001], [53.0, 35.69999999999999], [54.0, 43.39583333333333], [55.0, 41.53333333333334], [56.0, 35.214285714285715], [57.0, 38.391304347826086], [58.0, 38.440000000000005], [59.0, 38.05263157894736], [60.0, 50.733333333333334], [61.0, 47.06976744186047], [62.0, 45.599999999999994], [63.0, 50.38461538461539], [64.0, 40.43333333333334], [65.0, 49.099999999999994], [66.0, 41.4], [67.0, 51.75], [68.0, 49.52427184466019], [70.0, 50.17391304347825], [71.0, 51.22448979591837], [72.0, 57.53846153846154], [73.0, 65.33333333333333], [74.0, 59.96428571428572], [75.0, 66.69565217391305], [76.0, 83.22222222222223], [77.0, 97.14285714285714], [78.0, 53.66666666666666], [79.0, 71.10000000000002], [80.0, 59.37500000000001], [81.0, 63.45945945945946], [82.0, 56.64864864864865], [83.0, 55.0], [84.0, 46.52941176470587], [85.0, 47.515151515151494], [86.0, 48.36734693877551], [87.0, 53.075581395348834], [88.0, 52.22727272727273], [89.0, 58.666666666666664], [90.0, 48.00000000000002], [91.0, 61.02222222222221], [92.0, 55.878048780487795], [93.0, 54.22727272727272], [94.0, 60.964285714285715], [95.0, 48.78873239436621], [96.0, 59.53846153846155], [97.0, 63.07246376811594], [98.0, 64.18272425249167], [99.0, 65.20924574209248], [100.0, 68.70560747663536], [1.0, 4.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[91.46610000000004, 62.19129999999998]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 25000.0, "minX": 1.68908826E12, "maxY": 75285.0, "series": [{"data": [[1.68908826E12, 75285.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.68908826E12, 25000.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68908826E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 62.19129999999998, "minX": 1.68908826E12, "maxY": 62.19129999999998, "series": [{"data": [[1.68908826E12, 62.19129999999998]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68908826E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 62.14109999999975, "minX": 1.68908826E12, "maxY": 62.14109999999975, "series": [{"data": [[1.68908826E12, 62.14109999999975]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68908826E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.058999999999999705, "minX": 1.68908826E12, "maxY": 0.058999999999999705, "series": [{"data": [[1.68908826E12, 0.058999999999999705]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68908826E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 2.0, "minX": 1.68908826E12, "maxY": 362.0, "series": [{"data": [[1.68908826E12, 362.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.68908826E12, 109.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.68908826E12, 181.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.68908826E12, 125.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.68908826E12, 2.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.68908826E12, 62.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68908826E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 11.0, "minX": 145.0, "maxY": 71.0, "series": [{"data": [[145.0, 11.0], [1272.0, 71.0], [1435.0, 65.0], [1473.0, 63.0], [1509.0, 67.0], [1550.0, 62.0], [884.0, 43.0], [1732.0, 48.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1732.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 10.0, "minX": 145.0, "maxY": 71.0, "series": [{"data": [[145.0, 10.0], [1272.0, 71.0], [1435.0, 65.0], [1473.0, 63.0], [1509.0, 67.0], [1550.0, 62.0], [884.0, 41.0], [1732.0, 48.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1732.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 166.66666666666666, "minX": 1.68908826E12, "maxY": 166.66666666666666, "series": [{"data": [[1.68908826E12, 166.66666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68908826E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 166.66666666666666, "minX": 1.68908826E12, "maxY": 166.66666666666666, "series": [{"data": [[1.68908826E12, 166.66666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68908826E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 166.66666666666666, "minX": 1.68908826E12, "maxY": 166.66666666666666, "series": [{"data": [[1.68908826E12, 166.66666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68908826E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 166.66666666666666, "minX": 1.68908826E12, "maxY": 166.66666666666666, "series": [{"data": [[1.68908826E12, 166.66666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68908826E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

