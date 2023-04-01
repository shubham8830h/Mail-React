import React, { useState, useEffect } from "react";
import Folders from "./folders/Folders";
import Mails from "./mails/Mails";
import Menubar from "./menubar/Menubar";
import Reader from "./readSection/Reader";
import "./index.css";
import main_json from "../Assets/main.json";
import { AiTwotoneMail,AiFillDelete } from "react-icons/ai";
import { MdMoveToInbox } from "react-icons/md";
import { RiSpam2Fill } from "react-icons/ri";
import { BsFillFolderSymlinkFill } from "react-icons/bs";

const Index = () => {
  const [allMails, setAllMails] = useState([]);
  const [folderList] = useState([
    { name: "AllMails", icon:  <AiTwotoneMail/>  }, 
    { name: "Inbox", icon: <MdMoveToInbox/> },
    { name: "Spam", icon: <RiSpam2Fill/> },
    { name: "Deleted Items", icon: <AiFillDelete/> },
    { name: "Custom Folder", icon: <BsFillFolderSymlinkFill/> },
  ]);
  const [activeMail, setActiveMail] = useState([]); 
  const [searchText, setSearchText] = useState("");
  const [activeFolder, setActiveFolder] = useState([]);
  const [folderName, setFolderName] = useState("AllMails");

  const handleActiveMail = (obj) => {
    setActiveMail(obj);
    setSearchText("");
    document.getElementById("searchbar").value = "";
  };

  const handleDelete = (str) => {
    setActiveMail([]);
    console.log(str);
    console.log(
      "Checker ",
      allMails.filter((item) => item.mId !== str)
    );
    setAllMails(
      allMails.map((item) => {
        if (item.mId === str) {
          return { ...item, folder: ["deleted items"] };
        } else return item;
      })
    );
  };
  const handleFlagged = (str) => {
    setActiveMail([]);
    console.log(str);
    console.log(
      "Checker ",
      allMails.filter((item) => item.mId !== str)
    );
    setAllMails(
      allMails.map((item) => {
        if (item.mId === str) {
          return { ...item, folder: [...item.folder, "custom folder"] };
        } else return item;
      })
    );
  };
  const handleActiveFolder = (obj) => {
    setFolderName(obj);
    const grandArray = allMails;
    if (obj === "Inbox") {
      setActiveFolder(
        grandArray.filter((item) => item.folder.includes(obj.toLowerCase()))
      );
      // setActiveFolder(inbox)
    } else if (obj === "Spam") {
      setActiveFolder(
        grandArray.filter((item) => item.folder.includes(obj.toLowerCase()))
      );
    } else if (obj === "AllMails") {
      setActiveFolder(allMails);
    } else {
      setActiveFolder(
        grandArray.filter((item) => item.folder.includes(obj.toLowerCase()))
      );
    }
  };
  const fetchedInbox = async () => {
    setActiveFolder(await main_json);
    setAllMails(await main_json);
  };

  const filterMailsBySearch = (searchStr) => {
    const y =
      searchStr === "" || searchStr === undefined || searchStr === " "
        ? ""
        : searchStr.toLowerCase();
    const regex = new RegExp(y);
    setActiveFolder(
      allMails.filter(
        (item) =>
          item.mId.toLowerCase().match(regex) ||
          item.content.toLowerCase().match(regex) ||
          item.subject.toLowerCase().match(regex)
      )
    );
  };

  useEffect(() => {
    if (searchText.length > 0) setFolderName("Search Results");
    else handleActiveFolder("AllMails");
    filterMailsBySearch(searchText);
    console.log(searchText.length);
  }, [searchText]);

  useEffect(() => {
    const newArr = allMails.map((o) => {
      if (o.mId === activeMail.mId) {
        return {
          ...o,
          unread: false,
        };
      } else return o;
    });
    setAllMails(newArr);
  }, [activeMail]);

  useEffect(() => {
    handleActiveFolder(folderName);
  }, [allMails]);
  useEffect(() => {
    fetchedInbox();
  }, []);

  return (
    <div className="mailbox">
      <Menubar setSearchText={setSearchText} searchText={searchText} />
      <div className="folder_container">
        <Folders
          folderList={folderList}
          handleActiveFolder={handleActiveFolder}
        />
        <Mails
          handleDelete={handleDelete}
          activeFolder={activeFolder}
          folderName={folderName}
          handleFlagged={handleFlagged}
          handleActiveMail={handleActiveMail}
        />
        <Reader activeMail={activeMail} />
      </div>
    </div>
  );
};

export default Index;
