import axios from "axios";
import React, { useEffect, useState } from "react";
import "./ProjectImageDetailPage.style.scss";
import { FcPicture } from "react-icons/fc";
import { useParams } from "react-router-dom";

function ProjectImageDetailPage() {
  const { id } = useParams();
  let [dataObj, setDataObj] = useState(null); // 모든 data를 담을 state

  useEffect(() => {
    axios
      .get("/data.json")
      .then(function (response) {
        // 성공 핸들링
        // response는 data.json 안에 json 형식으로 되어 있는 모든 데이터를 뜻한다.
        const data = response.data;
        setDataObj(data); // set함수를 활용하여 dataObj 변수에 object 형식의 데이터를 대입한다.
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  if (!dataObj) {
    return <div>Loading...</div>;
  }
  const projectImage = dataObj.projectImages.find(
    (item) => item.id === parseInt(id)
  );

  return (
    <div>
      <div className="content">
        {projectImage ? (
          <div key={projectImage.id}>
            <h1 className="flex">
              <FcPicture className="image_icon60" />
              <span>{projectImage.title}</span>
            </h1>

            {projectImage.detail.map((detailItem, name) => (
              <div key={name}>
                {detailItem.name && (
                  <h3 className="margintop24bottom6">{detailItem.name}</h3>
                )}
                {detailItem.contribution && (
                  <p className="font_grey padding-6-2 bold600">
                    {detailItem.contribution}
                  </p>
                )}

                <ul className="padding-6-2">
                  <li className="flex column">
                    {detailItem.subImage1 && (
                      <img
                        className="width100 project-image"
                        src={detailItem.subImage1}
                        alt="project images"
                      />
                    )}
                    {detailItem.subImage2 && (
                      <img
                        className="width100 project-image"
                        src={detailItem.subImage2}
                        alt="project images"
                      />
                    )}
                    {detailItem.subImage3 && (
                      <img
                        className="width100 project-image"
                        src={detailItem.subImage3}
                        alt="project images"
                      />
                    )}
                    {detailItem.subImage4 && (
                      <img
                        className="width100 project-image"
                        src={detailItem.subImage4}
                        alt="project images"
                      />
                    )}
                    {detailItem.subImage5 && (
                      <img
                        className="width100 project-image"
                        src={detailItem.subImage5}
                        alt="project images"
                      />
                    )}

                    {detailItem.thumbnail && (
                      <b className="padding-6-2 bold600">
                        {detailItem.thumbnail}
                      </b>
                    )}
                    {detailItem.thumbnailImage && (
                      <img
                        className="width100 project-image"
                        src={detailItem.thumbnailImage}
                        alt="project images"
                      />
                    )}
                  </li>
                  <li className="flex column">
                    {detailItem.mockup && (
                      <b className="padding-18-2 bold600">
                        {detailItem.mockup}
                      </b>
                    )}
                    <div className="flex gap2">
                      {detailItem.mockupPCImage && (
                        <img
                          className="width50  project-image"
                          src={detailItem.mockupPCImage}
                          alt="project images"
                        />
                      )}
                      {detailItem.mockupMobileImage && (
                        <img
                          className="width50  project-image"
                          src={detailItem.mockupMobileImage}
                          alt="project images"
                        />
                      )}
                    </div>
                  </li>
                  <li className="flex column">
                    {detailItem.description && (
                      <b className="padding-18-2 bold600">
                        {detailItem.description}
                      </b>
                    )}
                    {detailItem.descriptionImage && (
                      <img
                        className="width100 project-image"
                        src={detailItem.descriptionImage}
                        alt="project images"
                      />
                    )}
                  </li>
                </ul>

                <div className="row_space"></div>
                <div className="gray_hr"></div>
              </div>
            ))}
          </div>
        ) : (
          <div>Portfolio item not found</div>
        )}
      </div>
    </div>
  );
}

export default ProjectImageDetailPage;
