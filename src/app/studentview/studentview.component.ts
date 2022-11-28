import { Component } from '@angular/core';

@Component({
  selector: 'app-studentview',
  templateUrl: './studentview.component.html',
  styleUrls: ['./studentview.component.css']
})
export class StudentviewComponent {
  student:any=[
    {
    
      "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqd1u4Q5hnfWhBNc79i2VtVd9bpPlF9OF35g&usqp=CAU",
      "name":"Anu",
      "roll":"1",
      
    },
    {
    
      "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwV6hEBAvVfMX4_0yY07cynTsiS0soakL6Eg&usqp=CAU",
      "name":"Diana",
      "roll":"2",
      
    },
    {
    
      "image":"data:image/jpeg;base64,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",
      "name":"Vincy",
      "roll":"3",
      
    },
    {
    
      "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_lB0zHrt60hoQLrfN_6yRD38TDrxrhgsw1Q&usqp=CAU",
      "name":"Judy",
      "roll":"4",
      
    },
    {
    
      "image":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWFRgVFhUYGBgZGBgYHBgYGhgSGBgYGBgaGRgYGBocIS4lHB4rHxgYJjgmKy80NTU1GiQ7QDszPy40NTEBDAwMEA8QHhISHjEhISE0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQxNDQ0NDQ0NDQ0NDQ0NDQ0NDE0NDQ0NDQ0NDQ0NP/AABEIARMAtwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAAIDBQYBB//EADwQAAIBAgQDBQYFAwMEAwAAAAECAAMRBBIhMQVBUQZhcZGhEyIygbHBQlLR4fBicpIjovEUFjOyFVOC/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAIhEAAwEAAwADAAIDAAAAAAAAAAERAhIhMQNBURNxIjJh/9oADAMBAAIRAxEAPwDPLhyRopkD4VuYI8Z6PgOHKqXtqYNieHI7AMNAZz+BxZgDhzyBPykLJaelVcIgW2UeEyfGOHFSSBpBaDWWilW1hJ0QnYwAvbulnwtwWHjDQkW2GonLY7x1QW8YSGFoFiHF5muxvMBqiyMAiSlxI6jy4SyQNHttAPaa2Gp6DWWWGwFYi5QqOr2T/wBoNQmN+FXiUghTlNFV4XUPJfk6H7wUcJqs2UI1zztYAc9TpYa+kd+jXCa9M466ztKrlIlpjuGOmhGXv5t4DmLW6Srq4Ug7H5ix8SOUrLRWkaqjxMEaiVvFcQHtK+kzrp9Z2rfcw4pOmaZxRLLBrYCA0RpLLBbayWNh+loLUGY6Q1FzC0MpYVQsahBWLwwZQSL3ilyrAKAeU5LoFzTx1ksRKHF8bs4GwB842piyUAHSZ/EoWaZLv0qmyw3FFqMAo159IuIcPLA3kfZjA5SL9PWa5MIDuI1mlJ/p4nxrCOrkhGt1sbSuw+JIOhnsfGeGKwIyzzfG8FyO3j0tKTXjE1BqcRa2p+cjbGm+94NWp5YIW1jWUTS2TFE7S1wOBV1NSq+SmupaxJP9I75RcNpl3AOi7t4DU+k7xTij1zYEpRTRRsCR+IgbmKVxGmcqVl5iO1SIMmGoKq/nPusdd2Prb+ChxXHajtbLcnwb7SLDcPd9vh62tDK9NaKkILMLa8zf+ekqZXnpfc/4Ap7djcMFsLXuV57HlzlhhK2IQMDWCgixAOa/2lT/ANQRdbnXX5xrVSRvHxpNLrD8ZemuQnOt73Is3zMccYtQ6WDbgcm62G1/GZ8vfecRyp0/h6iLWE/7C/TNjgeGFxc6d/2EmxnBbC+8P7NYoVKatz2PiJeYmmMpjS6MzAUqeW4PWTU3i4y2R9NjB8M95lrplrtFvhq3rLenVGXWUtCmZYU1NpDZBHiqsUixKk8oo6wG4WiWktPC++o6kQrhSe7pCHSzqe+TXQnRpeHYYLLtbAStwDAgQ6q4AnVmJACY4C0ynFcEpUn5zQYmtfSUfFWJUqJjv0bahgOJ0xfSVmS2sueJ0SDK/JtfTv8AvLT6JRLhlK0alRzvZBcm4B1bwv7o+c7wHhvtyGb4B8K8rSLtCpSjTQE++WfUZTY2C3FzbY85rOzBp+zCpuoANxbW0V6v6dKXi/C1oYFQuUAbTPce4cbEga22622+8v8AFcRdDZEzfO0FrVqzrdqS/wD5bXyMS6Gzz2vSObKdDpaBPdTYzbY/hS1UuAVZfkR/PtMlxLDOhyuNtmmmdUjWYDq06TygyvbeELr4iUQaXsljCpZb9GH0P2myq4269Z5rweplqr3m3np9bTeIl0mWnGTpdmb4tULPGYA+9JeKpY3glBrGJ9jXhrcIBLnD4cZb23mfwdTQeEv8NiBk1MMykMfUwII2ik64sERSqhiwGACoNOUH4lTtY9DeXFJxaVvFW0MWkoBYcLxIsOkOzhpkMDxAKMpNjyvLXAY33rE7xZ1OmH0XFSiDKfHUhrLh6wtM5xXF5T4w3IDKLiuFBuZS0MKM1iOYmmrIXkKcMysDM64GfTH9q6/+ug5U8un9rZrTVdnMUKpDKhXcG9uQv9xMfiKHtsUqH8dTXwJufSemcOwa010AHL5TSLikdNdbK3j9KoEJpfFpbbrrv3QHAjFEIfda494H3CvzFwfITVgq2ketMLCDTK1sKbAtvKTjuFVkOguPpNBiqko8fV0MhuPoqdHnOIwpLZVGpNgO86Q7FcJakqvmzdbCwBvY27r6S8oYO16mlwRYcz0A74TxT3MMxe2iva+l8y5QP8iPKafyOpIhfGo2zIsLEMPEeI3E3GGxeZFbqAZiaWq26TS9nELoVvqptF8vlMX4dx9MvB1wpUiamhw2/K8J/wDhr8pj/ITSgw7Q+nUbkZaUuz45w+lwVByjfyL6JjZnSznmYpqVwKKdpyRzDgyPBVCVE7i6JKmE4FAEEnxBFp2LPXYzBY+iVcCWOBbKQZzjZAIPfAqWKmGl2KmtXEXG8q8ZTBNzrK+jj++TnGKRqZNYUNwyDN4QusBaZ8cRymOfil9t5a8HTJYkeyxqMdhUH+ObKTNvjc5tkYqTbUWJHhcETJdqKOYLVAvrY+Et8FXerSR0qZdMrWFyWGnX5/OHKpM7MZrllL/B0nXV3zG1trecLd9JR4XCVudZiO8KfltLQtpBPoes8XLQfEGUXENrd8ucS+ko8UC20kEKni6SIzMwDC9tLkXFvd75lOMccOIYIFK012B1ZjyZvsO+WXH6WWmF5neZVBYX75r8eV6ZfJp+BuH0Nu6aLslXy1SvJx6j9ifKZxdbEeELwGIKuGG4IPj1/nfK+RcstGaPXsMBD0AmbwGPzKrDmLw44608/sXEvRaR1a6iUNTigHOVOO4ux+GXlN+DkL3G8VRecUxLVGY3JvFL/jGarBcbQoBmAIjMTx9LWveYRHhCvN3tmXFh/EccXN+UAznrHidKTPkPiOWqZIKxkSpJAkbYojrMTOqIskckhplJ5CGo50ZH0DC2uluhld2bxXsazUamgY212zD4T8xcd+ktKcpu02E+GoBuCp+W0fx9Pi/s1W0+l9G7GJUCC1cWOs8rxNepb/yPYaWztb69Jf8AZLFFlKMSbHQnU23+811hpUrO03DWVHLTi0Oclo07wpksJiamT47hsw8JikQ6r4keI0M9VTh/tDrfKN+/uEzvazg1UlGpqCqXGRQAAOoPOdHxeGHyNUyWFflJiMrAwdwVbYjqpFiPEGG2DL38poyEaHs9xC4yX1G31/WW1bFGYjAVylRT36zXMhPhOfWEtFvtUiaub7xA3jvYTvs44ScCxRwSKAFSKdo5VhzYa07Tw1zaIxemQIkkKGWlPCWEjdBJqCsARZIohKIDJxQEdRLoAUnUQw/2QnDYQpJCiGD8bUeyIPL3vnsPoYejgkDTU2lP2oxAuUBPuqBbqTufIfy0eVdI2+LPb1+GUZfUSw7NPkqkcjrA8v0hXDhZ1br+4+030v8AFmmfT0fDGFJTL6Dbmen7yu4YjPa2wGp3tpNFQphRYC3r8z3zDGb6ab1PBU6IUAAWt6frInp3hTiNyzeHPSg4nwClWHvoCeo0YeBEyWP7JVaVzTOdPynRx4EaH0npVpx07oUdPE66EHUEEaEHQ/Pvms4RiM9MX3XSXvH+AJWUkDK9tGH0bqJi+GFqdU0301ykdGGg/nfFpVF5dNEWiDjrByBECJkAYrjrFBgRFEMHfHA7R+ExYzSow9jDqNKU8owWS/fFDLKnEYqcKMdgfIyJ+HO34W8jISSG8shXHEGGUseZBS4PUv8ACfIyzw/BHO9x8pT4gskDY2CVsWZdL2eJNrmG4LsyiHM5zHkps1z4ARVIpfE2+gDhiKlJqzggi5BOlhY3PeZicdXLsWOlze3S+gHyE2Xa7FWUUwdWtcDYAa5R111J7ph6ty385c5Xwq3TNtJZSyhWsCe6aHs1RSqpV1BYEWYaEaC1v51mdxlSyADmfpNV2Qp2QsSAQbai51sZq/DM3WDpKigAWAGn/PMwkSCiNB4QkaCJEs6d9P8AidyxwEa3jb1lCEZE7TjeJ87fSQuZLY4R1mmD7Z4bK6VV0ze6T/Uvwnyv5Cbaq0z/AGkoh6D3/CM3hl1+l5K12UuitwVfOgYDXY+IkpDflMrOyWPCVAj/AAv7uvJhsZv8qdF8hJ0oyjKDP+WKalind6RRCKSlQQch6QhqiLzHpMnSdydjJ3pOfwt5GECmnTHUx+JfMSYcUpD8a+cylLAOfwN5GdfAuu6N5GEQVmobjFIfjHrEOO0h+L0Myy4Nz+E+Rh2FwDX1BAsdbc7aRuIFWzRUuKoRmDEDw1kz4rQuxyIouSdPkP1+kocE9EoHcgahSLk+8dAo0698G4zjWqWRDcKdQfIFh9pn/szdLiir4vic7s9xbloRlB8dzbW8z9SrcgDQEgd/zh+OYAdL336dfn9oLRp2sW8bc7fy06MqIx06yPEqBlB/CALdW3t6zWdiKRKO7C92te1+Qv8AX0mTrXZteR8r/taejdlcPkoIo3azEdc28evISl9mkwuo8NIVlkeHp5VAkpMEScZh1kT1B3+Rj2aRO0GBG1T+knx0kDue4dwkjmDVHmbY0RuZX8TUewqsfyMo8SIZe5sJV8fqA0mAICKrXY82ty+knL7HDzvD1Dr3W8x+00+GrNVQMtyRowH1mWcC1weun0+stezGOyVACfda4/Sa7VVGvwulwtQ/hbyM5LluLIOfpFMghEuMpjmIXR4nSG7D1lGvAK/5P9y/rOrwGvzUf5COIKy9Ti9IH4vQxtfidI/i9DKxOz1a34R8z+klpdmqp3ZPM/pFArJBxSmOcevGUvpfyjT2ZcaZl9ZIvZh/zr6wgVmO44CHfISFLB9Ou9x8/pAXxjOQWc5v53zQdoKVSixFRMyEZVcaDpuBodJlNyTz9JrldFNhZqX+LXUR7uPW5+14MiMxCqCWJAAXUknYAc56N2a7KiiBUrAGpvY6hPAc27+XLqbhDZm+FdksRVGdrIra+/fMe/KPvaeh8NwC0gNbmwF+4dByhAYcogwktoXJyE+YRrVF6yM1BGNUETYoOaqv5pG1dO8+GkjZpBUe0h6Y0h1WuTysPWCO8bUqf8SWjQuLnymbbZUhEt22Fl79z+0qO01H/Ra3K3lfWaIJA8fRDoynmLRpTsKeZYXCh762C29Y2khV7LrY+g1P0j8Co9oVOW2bZr20NtbTSYDh6PUzuLKNhYIpAOlxv8vOatwpKogqpc3imodqP9PlFIJBD2p/o/3ftIm7Ua/APOZZaLSX/pI+IqaRe1TflX1nf+6H5BfX9Znv+hM4KVoQKaL/ALmfc5fL95NhuP1qjhEUMzGwAFz385Q4XhrVHCqLk7fqe6bjgHZ4YdjUNQNdMhGXKASQxsbm/wAPSCQNhvEqedSlgRtlsCD3TNP2LTNnf/TX8iaufAHRfnNbUxYHwC39R+L5dJXVakb1PDTOX9jsBwvD0hmoU1W+7fE57ix1HhtJipO/lAKeNyNc/Cd/1EtDbcbGUtcjPeXlkXs4vZGSXnc0IiayMUYmQDczlSvaV9bEE7ftI1pIaTZNiMSBtp3wA1GbbTvO8kWnffzhCUbTNtsrwho0PPrDqS6GcRdI5DKSE2QsxgmIfQ8oUW7/AEgmPb3Hva2VuQ6GJgjy+mjB2Oj2YgkbHU6r16/MS8rYkhVsOWvIXvyk+FooigBdgOUc6FvwnyM0fbHYgOni3bYRS0weHI/Af8TFF0MmTgz8st/En6CGUezWIOpQKOrHIP8AdaaROJVANWt6QWvjC53JPQak+Ai5FLJWr2eq7XT/ADX9Y+h2Ruffqr/agLnzNgPWW9HBEe9UbL/QNX+fJf5pJnrgDKoyjzJ8TzhWHFHcFh6WHXKihm1uzAE68ibbdwjKtdm1J/QeAkD1JBUrwehrKRM9SB1q0hq1oI7yGzRIdXrQ3gXEdfZMeuT7r95S4ioFF3aw9T4DnH8FrUnewuHGqg6A25jvHSPNXZOo1Ga92tBnrTlUt01gqP72u/2lPRgskpF9532dorSVLEWkMsjVZMmk4BbkZIv9h+ZlJEs7cHxjShHL1j7n8q+ZP2nfaHoPWVBEFRD+U+doPVSwvl213vDKp0vAsQ2h8DFoSK0cYQfhPpEePIPwHzmQdKl7Ry0qnSOD7NZ/3CvJPX9oplGoVIow7NNjeK3IVdWOyj+bS24ZRyAMTd+Z6dwlB2fwJuXbVj6DpNEzWEg3ZO9S8gerB6uJA5wSpVY6hHPeFNvOHbDoJqV4O1S8mo4PNqxI7gD9xE+AYaoQ3cfcPnYxcWHJENOkznKN/KV/EcWEbItmI3bcA9B1nOIHEqD/AKZUbXT/AFDb+4bDwAlMzkjaNZ/SNa/CxpFH1bU9TOKgVsy6EG4I3FuYkOFGlyD5Sdeeh8jGRTT8HxntkJIsymxtz0uDbvkvsrEE8+UB7MJZH0I98bgj8MuWEGgTIGSPpJrH5Y5BFBkj04gkmIuIyx6S0iKNy95841ge/wBDHExpbxjAiqbcvmP0gOIIsdtjtn6eEsX+E6t52glRL6WJv/UftJaBGKRvehFW6jQQmnwKuG/B/kT9oeeCVmFrp6/pFCihVmO8Uux2Zq//AGJ5GKEFQ+kgURUcO1RtDZBueZ7hO0hnfIGtpc8zbbSXNKmFAUDQSs5pe9cevsio4RE+FR47k+JkxS4nCY8GwmyRg3SB2AtHvSv0kDe8L9IUj3F5PTAG9n8pxqQO6g99tfOFERpFonlD5MFbCqdtP9wkNenVXVER+4HKfI6essClxEotv5yXmFLVKjCcQYvkqIUJ+EkEAnpfYyyCHoPnCVtbf5Rtu6TB0iCeEeqfy0mCHpO5I+InoSLpG27pLyjZayS2NMjIPd5SaNIj4ipC66bfaAVQ39o6Df5neGY5rKB1MHRr6c+X6RPNQLRlOLY16dQqGNrAjU7H9wYKnGnB3NoV2rwjFkZRyYH5EEfUykTB1Ct72tykQ0D6nF3vfNaKVGHwVSoxvpaKEQQ9SwODVNtSd2O5/aTs0kEgqNrNfDNuusUc7aSFnkdSrpaFAfhG0j19025coNgmhjrcSV4DJFiIkSNykgMoDpM7OTojAaUjkqEd8RMVoATrUB7pxjl8JGsfX+CKAdLAxuYSJdtIrxdgTZh1kT1wIxkiWlCsIgTFMSVv3mR5p3EvdzbZdPnzkZM0z4JgnHNaRe2qkH5bH0PpM0cZcGwmqxS3R1/MjD5kG3r9Zhlpk85jpdmmfAvCY0i4igyUupnZMGeogwXEbwgGBY5rETV+GaOM0jqNpGF5E5k0YRgzLAGVuFMsEMEJiYRytEY2UgJAZ28YDHRAdjlWR3jS5hQgTmAkTPmkJadpmFCElM2uIjqJxog4AjA6NryLEYq3ur8X/r+8aal9B5/pBqagSkqKnUoW8Yx0k7NpB2eXCacqcv7l+olRR4jhr2agoINiNBYjcS4fdf7gfLX7TGdpqRSuSAbVAH067N6i/wA5h8nbNs+GgPE8MDYUF8x+kUxftdPDznJlBnrSwLiI0B74Ypg+NW6zbXhmivzzjxqxzyBk2Gh6GV+Hh6GUhMkinLzkYDhHiQ3nQ8dAkKxpSdDxwaEAZljkS28TVQIDXx3JfePoP1i6DsKrVQB/PSDF7/z6yBbk3Y3P08I/NLzn7YmSh5FUezHzjS28jrNqD3CUEJRUkLtY2jC0TG9vKFCBKa/IH1sPvKbtVgg6I/NWK/Jh+qjzlym3j9v56RnFaeag/cub/H3vtMNd6Lz0ec4rh3QkmKWFQZx7psQd+607JpR6OkjxOxnYpq/DMqBvHNFFMyiXDw5doopSJHrOGKKUApyKKIBRrGcigwA8a5FhfS20hpRRR5H9E85FFLEckbcvCKKADDEIoomAcu8lr/8Ajf8Atb6GKKZL0Z5jUc5jrFFFAs//2Q==",
      "name":"Anju",
      "roll":"5",
      
    },
    {
    
      "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo2t1j5e-_kvc07qooav4H32Kv0v1KHkn2Kg&usqp=CAU",
      "name":"Ammu",
      "roll":"6",
      
    },
    {
    
      "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7Xh9PifMRhzJfnv4DVRnhcFv1DsMB0RtcAQ&usqp=CAU",
      "name":"Sree",
      "roll":"7",
      
    },
    {
    
      "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJxv0P4qDS_KAn-lIeyKpOSVEM87pPKbIVIQ&usqp=CAU",
      "name":"Sreeja",
      "roll":"8",
      
    }

    
  ]

}
