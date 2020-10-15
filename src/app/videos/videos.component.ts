import { Component, OnInit } from '@angular/core';
import { FilterPipe } from './filter.pipe';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {

  searchText: any;
  videosList = [];
  data = [];
  videoId: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getVideos()
  }
  searchVideo() {
    console.log(this.searchText)
    this.videosList = this.data.filter((a) => {
      return a.title.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1 || a.subtitle.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1
    })
  }
  playVideo(data) {
    this.videoId = data.videoId
    console.log(data)
  }
  getVideos() {
    // this.videosList = [
    //   {
    //     id: 'D0EDeNCciDo',
    //     videoId: 'D0EDeNCciDo',
    //     title: 'Material Design 10 Mat-Header Sort Demo',
    //     subtitle: 'Angular 10 Material Design Mat-Header Sort Demo by http://angularorange.io.',
    //     image: 'https://i.ytimg.com/vi/D0EDeNCciDo/hqdefault.jpg'
    //   },
    //   {
    //     id: 'D0EDeNCciDo',
    //     videoId: 'D0EDeNCciDo',
    //     title: 'Material Design 10 Mat-Header Sort Demo',
    //     subtitle: 'Angular 10 Material Design Mat-Header Sort Demo by http://angularorange.io.',
    //     image: 'https://i.ytimg.com/vi/D0EDeNCciDo/hqdefault.jpg'
    //   }
    // ]
    // return;
    let youtubeApi = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyApdvItXphoCzgZ9pxxikGaZeA8b1SWEg8&channelId=UCjzjsBc3Ihhi6QA5mHWGLQg&part=snippet,id&order=date&maxResults=50`
    this.http.get(youtubeApi).subscribe(data => {
      let newdata: any = data;
      console.log("data",data);
      this.videosList = newdata.items.map((i, index) => {
        return {
          id: index,
          videoId: i.id.videoId,
          title: i.snippet.title,
          subtitle: i.snippet.description,
          image: i.snippet.thumbnails.medium.url,
        }
      })
      this.data = this.videosList;
    }
    );
  }

}
