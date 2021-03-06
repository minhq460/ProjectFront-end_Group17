import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsRss, RssItem } from '../model/news-rss';
import * as xml2js from 'xml2js';
import { NewsService } from './news.service';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  categories: any[] = [
    
    {
      title: [{ name: 'Thời Sự', url: 'thoi-su', link:'rss/thoi-su' }],
      child: [
        { nameItem: 'Pháp Luật', urlItem:'thoi-su/phap-luat', linkItem: '/phap-luat' },
        { nameItem: 'Phóng Sự / Điều Tra', urlItem:'thoi-su/phong-su-dieu-tra', linkItem: '/phong-su-dieu-tra' },
        { nameItem: 'Quốc Phòng', urlItem:'thoi-su/quoc-phong', linkItem: '/quoc-phong' },
        { nameItem: 'Dân Sinh', urlItem:'thoi-su/dan-sinh', linkItem: '/dan-sinh' },
        { nameItem: 'Quyền Được Biết', urlItem:'thoi-su/quyen-duoc-biet', linkItem: '/quyen-duoc-biet' },
        { nameItem: 'Lao Động - Việc Làm', urlItem:'thoi-su/lao-dong-viec-lam', linkItem: '/lao-dong-viec-lam' },
        { nameItem: 'Chính Trị', urlItem:'thoi-su/chinh-tri', linkItem: '/chinh-tri' },
        { nameItem: 'Đại Hội XIII', urlItem:'thoi-su/dai-hoi-xiii', linkItem: '/dai-hoi-xiii' },
        { nameItem: 'Tôi Đón Tết', urlItem:'thoi-su/toi-don-tet', linkItem: '/toi-don-tet' },
      ],
      empty:[{ nameItem: '', linkItem: '' }],
    },
    {
      title: [{ name: 'Thế Giới', url: 'the-gioi', link:'rss/the-gioi' }],
      child: [
        { nameItem: 'Người Việt Năm Châu', urlItem:'the-gioi/nguoi-viet-nam-chau', linkItem: '/nguoi-viet-nam-chau' },
        { nameItem: 'Góc Nhìn', urlItem:'the-gioi/goc-nhin', linkItem: '/goc-nhin' },
        { nameItem: 'Hồ Sơ', urlItem:'the-gioi/ho-so', linkItem: '/ho-so' },
        { nameItem: 'Quân Sự', urlItem:'the-gioi/quan-su', linkItem: '/quan-su' },
        { nameItem: 'Kinh Tế Thế Giới', urlItem:'the-gioi/kinh-te-the-gioi', linkItem: '/kinh-te-the-gioi' },
        { nameItem: 'Chuyện Lạ', urlItem:'the-gioi/chuyen-la', linkItem: '/chuyen-la' },
      ],
      empty:[{ nameItem: '', linkItem: '' }],
    },
    {
      title: [{ name: 'Tài Chính - Kinh Doanh', url: 'tai-chinh-kinh-doanh', link:'rss/tai-chinh-kinh-doanh' }],
      child: [
        { nameItem: 'Chứng Khoáng', urlItem:'tai-chinh-kinh-doanh/chung-khoan', linkItem: '/chung-khoan' },
        { nameItem: 'Doanh Nhân', urlItem:'tai-chinh-kinh-doanh/doanh-nhan', linkItem: '/doanh-nhan' },
        { nameItem: 'Địa Ốc', urlItem:'tai-chinh-kinh-doanh/dia-oc', linkItem: '/dia-oc' },
        { nameItem: 'Tiêu Dùng', urlItem:'tai-chinh-kinh-doanh/tieu-dung', linkItem: '/tieu-dung' },
        { nameItem: 'Làm Giàu', urlItem:'tai-chinh-kinh-doanh/lam-giau', linkItem: '/lam-giau' },
        // { nameItem: 'Chính Sách - Phát Triển', urlItem:'tai-chinh-kinh-doanh/chinh-sach-phat-trien', linkItem: '/chinh-sach-phat-trien'},
        { nameItem: 'Ngân Hàng', urlItem:'tai-chinh-kinh-doanh/ngan-hang', linkItem: '/ngan-hang' },
        { nameItem: 'Doanh Nghiệp', urlItem:'tai-chinh-kinh-doanh/doanh-nghiep', linkItem: '/doanh-nghiep' },
        { nameItem: 'Kinh Tế Xanh', urlItem:'tai-chinh-kinh-doanh/kinh-te-xanh', linkItem: '/kinh-te-xanh' },
      ],
      empty:[{ nameItem: '', linkItem: '' }],
    },
    {
      title: [{ name: 'Đời Sống', url: 'doi-song', link:'rss/doi-song' }],
      child: [
        { nameItem: 'Ẩm Thực', urlItem:'doi-song/am-thuc', linkItem: '/am-thuc' },
        { nameItem: 'Gia Đình', urlItem:'doi-song/gia-dinh', linkItem: '/gia-dinh' },
        { nameItem: 'Cộng Đồng', urlItem:'doi-song/cong-dong', linkItem: '/cong-dong' },
        { nameItem: 'Người Sống Quanh Ta', urlItem:'doi-song/nguoi-song-quanh-ta', linkItem: '/nguoi-song-quanh-ta' },
        { nameItem: 'Sống Xanh', urlItem:'doi-song/song-xanh', linkItem: '/song-xanh' },
        { nameItem: 'Gương Sáng Biên Cương', urlItem:'doi-song/guong-sang-bien-cuong', linkItem: '/guong-sang-bien-cuong' },
      ],
      empty:[{ nameItem: '', linkItem: '' }],
    },
    {
      title: [{ name: 'Văn Hoá', url: 'van-hoa', link:'rss/van-hoa' }],
      child: [
        { nameItem: 'Câu Chuyện Văn Hoá', urlItem:'van-hoa/cau-chuyen', linkItem: '/cau-chuyen' },
        { nameItem: 'Thành Phố Tôi Yêu', urlItem:'van-hoa/thanh-pho-toi-yeu', linkItem: '/thanh-pho-toi-yeu' },
        { nameItem: 'Khảo Cứu', urlItem:'van-hoa/khao-cuu', linkItem: '/khao-cuu' },
        { nameItem: 'Xem - Nghe', urlItem:'van-hoa/xem-nghe', linkItem: '/xem-nghe' },
        { nameItem: 'Thương Nhớ Miền Trung', urlItem:'van-hoa/thuong-nho-mien-trung',  linkItem: '/thuong-nho-mien-trung'},
        { nameItem: 'Hà Nội Thành Phố Tôi Yêu', urlItem:'van-hoa/ha-noi-thanh-pho-toi-yeu', linkItem: '/ha-noi-thanh-pho-toi-yeu'},
        { nameItem: 'Sống Đẹp', urlItem:'van-hoa/song-dep', linkItem: '/song-dep' },
        { nameItem: 'Món Ngon Hà Nội', urlItem:'van-hoa/mon-ngon-ha-noi', linkItem: '/mon-ngon-ha-noi' },
      ],
      empty:[{ nameItem: '', linkItem: '' }],
    },
    {
      title: [{ name: 'Giải Trí', url: 'giai-tri', link:'rss/giai-tri' }],
      child: [
        { nameItem: 'Truyền Hình', urlItem:'giai-tri/truyen-hinh', linkItem: '/truyen-hinh' },
        { nameItem: 'Phim', urlItem:'giai-tri/phim', linkItem: '/phim' },
        { nameItem: 'Đời Nghệ Sĩ', urlItem:'giai-tri/doi-nghe-si', linkItem: '/doi-nghe-si' },
      ],
      empty:[{ nameItem: '', linkItem: '' }],
    },
    {
      title: [{ name: 'Giới Trẻ', url: 'gioi-tre', link:'rss/gioi-tre' }],
      child: [
        { nameItem: 'Sống - Yêu - Ăn - Chơi', urlItem:'gioi-tre/song-yeu-an-choi', linkItem: '/song-yeu-an-choi' },
        { nameItem: 'Thế Giới Mạng', urlItem:'gioi-tre/the-gioi-mang', linkItem: '/the-gioi-mang' },
        { nameItem: 'Kết Nối', urlItem:'gioi-tre/ket-noi', linkItem: '/ket-noi' },
        { nameItem: 'Đoàn - Hội', urlItem:'gioi-tre/doan-hoi', linkItem: '/doan-hoi' },
      ],
      empty:[{ nameItem: '', linkItem: '' }],
    },
    {
      title: [{ name: 'Giáo Dục', url: 'giao-duc', link:'rss/giao-duc' }],
      child: [
        { nameItem: 'Du Học', urlItem:'giao-duc/du-hoc', linkItem: '/du-hoc' },
        { nameItem: 'Chọn Nghề', urlItem:'giao-duc/chon-nghe', linkItem: '/chon-nghe' },
        { nameItem: 'Người Thầy', urlItem:'giao-duc/nguoi-thay', linkItem: '/nguoi-thay' },
        { nameItem: 'Chọn Trường', urlItem:'giao-duc/chon-truong', linkItem: '/chon-truong' },
       
        { nameItem: 'Sức Khoẻ Học Đường', urlItem:'giao-duc/suc-khoe-hoc-duong', linkItem: '/suc-khoe-hoc-duong' },
      ],
      empty:[{ nameItem: '', linkItem: '' }],
    },
    {
      title: [{ name: 'Sức Khoẻ', url: 'suc-khoe', link:'rss/suc-khoe' }],
      child: [
        { nameItem: 'Làm Đẹp', urlItem:'suc-khoe/lam-dep', linkItem: '/lam-dep' },
        { nameItem: 'Giới Tính', urlItem:'suc-khoe/gioi-tinh', linkItem: '/gioi-tinh' },
        { nameItem: 'Khoẻ Đẹp Mỗi Ngày', urlItem:'suc-khoe/khoe-dep-moi-ngay', linkItem: '/khoe-dep-moi-ngay' },
        { nameItem: 'Sống Vui Khoẻ', urlItem:'suc-khoe/song-vui-khoe', linkItem: '/song-vui-khoe' },
      ],
      empty:[{ nameItem: '', linkItem: '' }],
    },
    {
      title: [{ name: 'Du Lịch', url: 'du-lich', link:'rss/du-lich' }],
      child: [
        { nameItem: 'Khám Phá', urlItem:'du-lich/kham-pha', linkItem: '/kham-pha' },
        { nameItem: 'A-Z', urlItem:'du-lich/a-z', linkItem: '/a-z' },
        { nameItem: 'Săn Tour', urlItem:'du-lich/san-tour', linkItem: '/san-tour' },
      ],
      empty:[{ nameItem: '', linkItem: '' }],
    },
    {
      title: [{ name: 'Công Nghệ', url: 'cong-nghe', link:'rss/cong-nghe' }],
      child: [
        { nameItem: 'Sản Phẩm Mới', urlItem:'cong-nghe/san-pham-moi', linkItem: '/san-pham-moi' },
        { nameItem: 'Kinh Nghiệm', urlItem:'cong-nghe/kinh-nghiem', linkItem: '/kinh-nghiem' },
        { nameItem: 'Ý Tưởng', urlItem:'cong-nghe/y-tuong', linkItem: '/y-tuong' },
        { nameItem: 'Xu Hướng', urlItem:'cong-nghe/xu-huong', linkItem: '/xu-huong' },
        { nameItem: 'Chuyển Đổi Số', urlItem:'cong-nghe/chuyen-doi-so', linkItem: '/chuyen-doi-so' },
      ],
      empty:[{ nameItem: '', linkItem: '' }],
    },
    {
      title: [{ name: 'Bạn Cần Biết', url: 'ban-can-biet', link:'rss/ban-can-biet' }],
      child: [
        { nameItem: 'Tuyển Dụng', urlItem:'ban-can-biet/tuyen-dung', linkItem: '/tuyen-dung' },
        { nameItem: 'Sản Phẩm', urlItem:'ban-can-biet/san-pham', linkItem: '/san-pham' },
        { nameItem: 'Giải Trí', urlItem:'ban-can-biet/giai-tri', linkItem: '/giai-tri' },
        { nameItem: 'Dịch Vụ', urlItem:'ban-can-biet/dich-vu', linkItem: '/dich-vu' },
        { nameItem: 'Giải Thưởng', urlItem:'ban-can-biet/giai-thuong', linkItem: '/giai-thuong' },
        { nameItem: 'Thông Báo', urlItem:'ban-can-biet/thong-bao', linkItem: '/thong-bao' },
        { nameItem: 'Miền Bắc', urlItem:'ban-can-biet/mien-bac', linkItem: '/mien-bac' },
        { nameItem: 'Miền Trung', urlItem:'ban-can-biet/mien-trung', linkItem: '/mien-trung' },
        { nameItem: 'Miền Nam', urlItem:'ban-can-biet/mien-nam', linkItem: '/mien-nam' },
      ],
      empty:[{ nameItem: '', linkItem: '' }],
    },
  ];

  currentCategoryChoosen: any = 'rss/home';
  currentCategoryItemChoosen: any='';

  RssData!: NewsRss;

  items: RssItem[] = [];
  itemSport: RssItem[] = [];
  itemWorld: RssItem[] = [];
  itemVideo: RssItem[] = [];

  //https://thanhnien.vn/rss/thoi-su/phap-luat.rss
  constructor(private _newsService: NewsService, public actRoute: ActivatedRoute) {
    /*Read Data*/
    this._newsService.getNews('https://thanhnien.vn/'  + this.currentCategoryChoosen + this.currentCategoryItemChoosen + '.rss',{
        headers: new HttpHeaders({
          Accept: 'application/xml',
          }),
          responseType: 'text',
        })
      .subscribe((data: any) => {
        let parseString = xml2js.parseString;
        parseString(data, (err, result) => {
          console.log(result)
          this.RssData=result;
        });
      });

  }

  ngOnInit(): void {
    this.actRoute.paramMap.subscribe((params:any) =>{
      this.categories = params.get('url');
      // this.urlItem = params.get('urlItem')??'';

      // this.getItems;
    })
    this.changeCategory(this.currentCategoryChoosen);
    this.changeCategoryItem(this.currentCategoryItemChoosen);
  }

  changeCategory(_k: string) {
    this.currentCategoryChoosen = _k;
    this._newsService.getNews('https://thanhnien.vn/' + this.currentCategoryChoosen + this.currentCategoryItemChoosen + '.rss',{
          headers: new HttpHeaders({
            Accept: 'application/xml',
          }),
          responseType: 'text',
        })
      .subscribe((data: any) => {
        let parseString = xml2js.parseString;
        parseString(data, (err, result) => {
          this.RssData = result;
        });
      });

  }

  changeCategoryItem(_c: string) {
    this.currentCategoryItemChoosen = _c;
    this._newsService.getNews('https://thanhnien.vn/' + this.currentCategoryChoosen + this.currentCategoryItemChoosen + '.rss',{
          headers: new HttpHeaders({
            Accept: 'application/xml',
          }),
          responseType: 'text',
        }
      )
      .subscribe((data: any) => {
        let parseString = xml2js.parseString;
        parseString(data, (err, result) => {
          this.RssData = result;
        });
      }).unsubscribe();
  }

  getItemHome(): RssItem[] {
    this._newsService.getNews('https://thanhnien.vn/rss/home.rss',
      {
        headers: new HttpHeaders({
          'Accept': 'application/xml',
        }),
        responseType: 'text'
      })
      .subscribe((data) => {
        let parser = new DOMParser();
        let xml = parser.parseFromString(data, "application/xhtml+xml");
        // list item from rss
        let itemsArr = xml.getElementsByTagName('item');

        for (let i = 0; i < itemsArr.length; i++) {
          this.items.push(this.convertToItem(itemsArr[i]))
        }
      });
    return this.items
  }

  getItemVideo(): RssItem[] {
    this._newsService.getNews('https://video.thanhnien.vn/rss/home.rss',
      {
        headers: new HttpHeaders({
          'Accept': 'application/xml',
        }),
        responseType: 'text'
      })
      .subscribe((data) => {
        let parser = new DOMParser();
        let xml = parser.parseFromString(data, "application/xhtml+xml");
        // list item from rss
        let itemsArr = xml.getElementsByTagName('item');
        for (let i = 0; i <itemsArr.length; i++) {
          this.itemVideo.push(this.convertToItem2(itemsArr[i]))}
      });
    return this.itemVideo
  }

  getItemSport(): RssItem[] {
    this._newsService.getNews('https://thethao.thanhnien.vn/rss/home.rss',
      {
        headers: new HttpHeaders({
          'Accept': 'application/xml',
        }),
        responseType: 'text'
      })
      .subscribe((data) => {
        let parser = new DOMParser();
        let xml = parser.parseFromString(data, "application/xhtml+xml");
        // list item from rss
        let itemsArr = xml.getElementsByTagName('item');
        for (let i = 0; i <itemsArr.length; i++) {
          this.itemSport.push(this.convertToItem2(itemsArr[i]))}
      });
    return this.itemSport
  }

  getItemWorld(): RssItem[] {
    this._newsService.getNews('https://thanhnien.vn/rss/the-gioi.rss',
      {
        headers: new HttpHeaders({
          'Accept': 'application/xml',
        }),
        responseType: 'text'
      })
      .subscribe((data) => {
        let parser = new DOMParser();
        let xml = parser.parseFromString(data, "application/xhtml+xml");
        // list item from rss
        let itemsArr = xml.getElementsByTagName('item');
        for (let i = 0; i <itemsArr.length; i++) {
          this.itemWorld.push(this.convertToItem(itemsArr[i]))}
      });
    return this.itemWorld
  }

  private convertToItem(ele: any): RssItem {
      let title = ele.getElementsByTagName('title')[0].innerHTML;
      let linkDetail = ele.getElementsByTagName('link')[0].innerHTML;
      // description tag contain diversity element need to parse
      let desc = ele.getElementsByTagName('description')[0].innerHTML.slice(9, -3);
      let parser = new DOMParser();
      let html = parser.parseFromString(desc, "text/html");
      //convert image link with full width

      let linkImg = html.getElementsByTagName('img')[0].src;
      let indexc = linkImg.indexOf('uploaded');
      linkImg = "https://image.thanhnien.vn/" + linkImg.slice(indexc);
      // get pubdate
      let pubDate = ele.getElementsByTagName('pubDate')[0].innerHTML.trim();
      let date: Date = new Date(pubDate);


      // get text desciption need to remove orther text content
      let body = html.getElementsByTagName('body')[0];
      let rem = html.getElementsByTagName('div')[0];
      if (rem != null) {
        rem.remove();
      }
      let description = body.textContent;
      // object item
      let itm: RssItem = new RssItem(title, description ?? '', linkDetail, linkImg, date);
      // console.log(itm.getTime())
      return itm;
  }

  private convertToItem2(ele: any): RssItem {
    let title = ele.getElementsByTagName('title')[0].innerHTML.slice(9, -3);
    let linkDetail = ele.getElementsByTagName('link')[0].innerHTML;
    // description tag contain diversity element need to parse
    let desc = ele.getElementsByTagName('description')[0].innerHTML.slice(9, -3);
    let parser = new DOMParser();
    let html = parser.parseFromString(desc, "text/html");
    //convert image link with full width

    let linkImg = html.getElementsByTagName('img')[0].src;
    let indexc = linkImg.indexOf('uploaded');
    linkImg = "https://image.thanhnien.vn/" + linkImg.slice(indexc);
    // get pubdate
    let pubDate = ele.getElementsByTagName('pubDate')[0].innerHTML.trim();
    let date: Date = new Date(pubDate);


    // get text desciption need to remove orther text content
    let body = html.getElementsByTagName('body')[0];
    let rem = html.getElementsByTagName('div')[0];
    if (rem != null) {
      rem.remove();
    }
    let description = body.textContent;
    // object item
    let itm: RssItem = new RssItem(title, description ?? '', linkDetail, linkImg, date);
    // console.log(itm.getTime())
    return itm;
  }

}
