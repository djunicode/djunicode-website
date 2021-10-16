# Contributing to the website
First, fork the github repo and clone it, then follow the steps. After completing the steps send a PR

## Add a new profile
- Open data/profile/profile.json
- Scroll to the end of the file
- Copy last person's json object and update the key to prev_key + 1
- Update your details, SAP ID, Github and LinkedIn links
- Upload your image to images/profile and update the link in your profile json 
  
## Update your profile description
- Open data/profile/profile.json
- Use Ctrl + F to search for your name
- Update your description

## Update your profile image
- Open data/profile/profile.json
- Use Ctrl + F to search for your name
- Go to images/profile and delete the previous image linked to your profile
- Upload the new image
- Update the image path, setting it to link to the new image

## Add a new project
- Copy the project template from docs/project_template.json to data/projects/
- Fill in the project details and update the name of the file
- Upload images to images/projects/{project year}/{random number??}, and add correct links to the project json
- Add correct profile numbers for all BEs, TEs and SEs associated with the project
- Add github link to project
- Thank You!! 