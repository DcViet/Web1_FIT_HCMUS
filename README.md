# Web1_FIT_HCMUS

dòng 23 đóng thẻ </li> chưa đúng, nên đóng sau khi đóng thẻ </ul> tại dòng 29, tương tự cho dòng 30 đến 37, và khi khai báo type="radio" cần khai báo thêm name="..." để tick chọn,   tại dòng 39, khai báo thẻ button chưa đúng, để upfile cần khai báo type="file" , nên dùng thẻ <input> type="file" value="submit" </input>,  

#Sử dụng VSCode and git để update code from local to github
Linux / Mac eg.
```
git config --global core.editor vim
Check git settings which displays configuration details

git config --list
Login to github and create a remote repository. Copy the URL of this repository

Navigate to your project directory and execute the below commands

git init                                                           // start tracking current directory
git add -A                                                         // add all files in current directory to staging area, making them available for commit
git commit -m "commit message"                                     // commit your changes
git remote add origin https://github.com/username/repo-name.git    // add remote repository URL which contains the required details
git pull origin main                                             // always pull from remote before pushing
git push -u origin main                                          // publish
```
