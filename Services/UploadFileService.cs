namespace BipWebVn.Services
{
    public class UploadFileService
    {

        protected IWebHostEnvironment _environment;

        public UploadFileService(IWebHostEnvironment environment)
        {
            _environment = environment;
        }

        public string PostFile(IFormFile file, string folder)
        {
            string contentPath = _environment.ContentRootPath;
            string path = Path.Combine(contentPath, folder);
            string fileName = DateTime.Now.ToString("yyyymmddMMss") + Path.GetExtension(file.FileName);
            if (!Directory.Exists(path))
            {
                Directory.CreateDirectory(path);
            }
            using (FileStream stream = new FileStream(Path.Combine(path, fileName), FileMode.Create))
            //using (FileStream stream = new FileStream(Path.Combine(folder, fileName), FileMode.Create))
            {
                file.CopyTo(stream);
            }
            string filePath = Path.Combine(folder, fileName);
            filePath = filePath.Replace("FileUpload", "files");
            return filePath;
        }

        /* Upload multiple file
         * 
        public async Task<List<string>> PostFiles2(List<IFormFile> files, string folder)
        {
            long size = files.Sum(f => f.Length);
            string filePath = "";
            List<string> listFile = new List<string>();
            string wwwPath = _environment.WebRootPath;
            string contentPath = _environment.ContentRootPath;

            string path = Path.Combine(_environment.WebRootPath, folder);
            if (!Directory.Exists(path))
            {
                Directory.CreateDirectory(path);
            }

            List<string> uploadedFiles = new List<string>();
            foreach (IFormFile postedFile in files)
            {
                string fileName = Path.GetFileName(postedFile.FileName);
                using (FileStream stream = new FileStream(Path.Combine(path, fileName), FileMode.Create))
                {
                    postedFile.CopyTo(stream);
                    uploadedFiles.Add(fileName);
                }
                filePath = Path.Combine(path, fileName);
                listFile.Add(filePath);
            }
            return listFile;
        }*/
    }
}
