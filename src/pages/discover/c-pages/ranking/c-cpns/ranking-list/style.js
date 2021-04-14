import styled from 'styled-components';

export const RankingListWrapper = styled.div`
  padding: 0 40px;

  .play-list {
    table {
      width: 100%;
      border: 1px solid #d9d9d9;
      table-layout: fixed;
      thead {
        th {
          height: 34px;
          line-height: 34px;
          background-image: url(${require("@/assets/img/sprite_table.png")});
          color: #666;
          border: 1px solid #ddd;
          border-width: 0 0 1px 1px;
          padding-left: 10px;
        }

        .ranking {
          width: 78px;
          border-left: none;
        }

        .duration {
          width: 91px;
        }

        .singer {
          width: 173px;
        }
      }

      tbody {
        tr {
          height: 25px;
          td {
            padding: 3px 10px;
          }
          .timeHover{
            
          }
          .add-collect-share-download {
            display: none;
            span {
              width: 17px;
              height: 17px;
              display: inline-block;
              vertical-align: middle;
              cursor: pointer;
              margin-left: 2px;
            }
            .add {
              width: 13px;
              height: 13px;
              background-position: 0 -700px;
              margin-bottom: 3px;
              margin-left: 0;
              &:hover {
                background-position: -22px -700px;
              }
            }
            .collect {
              background-position: 0 -174px;
              &:hover {
                background-position: -20px -174px;
              }
            }
            .share {
              background-position: 0 -195px;
              &:hover {
                background-position: -20px -195px;
              }
            }
            .download {
              background-position: -81px -174px;
              &:hover {
                background-position: -104px -174px;
              }
            }
          }
          &:hover {
            .timeHover{
              display: none;
            }
            .add-collect-share-download {
              display: table-cell;
            }
          }
        }

        

        tr:nth-child(2n) {
          background-color: #fff;
        }

        tr:nth-child(2n+1) {
          background-color: #f7f7f7;
        }

        .rank-num {
          display: flex;

          .num {
            width: 25px;
            height: 18px;
            text-align: center;
            color: #999;
          }

          .new {
            width: 16px;
            height: 17px;
            margin-left: 12px;
            background-position: -67px -283px;
          }
        }

        .song-name {
          display: flex;
          align-items: center;
          
          img {
            width: 50px;
            height: 50px;
            margin-right: 10px;
            margin-top: 5px;
            margin-bottom: 5px;
            cursor: pointer;
          }

          .play {
            width: 17px;
            height: 17px;
            background-position: 0 -103px;
            cursor: pointer;
            &:hover {
              background-position: 0 -128px;
            }
          }

          .name {
            margin-left: 10px;
            cursor: pointer;
          }
        }
      }
    }
  }
`
