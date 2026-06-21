<?php
// Enable error reporting to help diagnose any localhost issues
error_reporting(E_ALL);
ini_set('display_errors', 1);

$jsonFile = 'data.json';
$imageDir = 'images/';

$isVercel = getenv('VERCEL') || isset($_ENV['VERCEL']);

if (!file_exists($imageDir) && !$isVercel) { mkdir($imageDir, 0777, true); }

if (!file_exists($jsonFile)) {
    if (!$isVercel) {
        file_put_contents($jsonFile, json_encode([]));
    }
}

$raw_data = file_exists($jsonFile) ? file_get_contents($jsonFile) : "{}";
$data = json_decode($raw_data, true);

// Fallback for null data to prevent PHP 8 errors
if (!is_array($data)) { $data = []; }

$msg = "";
if ($isVercel) {
    $msg = "⚠️ <strong>Running on Vercel:</strong> The filesystem is read-only. Changes made here will NOT be saved. Please update locally and push to GitHub.";
}

if ($_SERVER['REQUEST_METHOD'] == 'POST' && !$isVercel) {
    // 1. Text Fields Update
    $textFields = [
        'phone_no', 'ov_title', 'ov_desc', 'p_2bhk_area', 'p_2bhk_price', 'p_3bhk_area', 'p_3bhk_price',
        'story_title', 'story_desc', 'peace_title', 'peace_desc', 'am_title', 'am_desc',
        'conn_title', 'conn_desc', 'comf_title', 'comf_desc', 'fp_title', 'fp_desc',
        'gal_title', 'gal_desc', 'why_title', 'why_desc', 'google_map'
    ];
    
    foreach ($textFields as $field) {
        if (isset($_POST[$field])) { $data[$field] = stripslashes($_POST[$field]); }
    }

    // 2. Image Uploads Handle
    $imageFields = [
        'site_logo', 'hero_banner', 'story_img', 'peace_img', 
        'am1_img', 'am2_img', 'am3_img', 'am4_img', 
        'comf_img', 'fp1_img', 'fp2_img', 'gal1_img', 'gal2_img'
    ];
    
    foreach ($imageFields as $imgField) {
        if (isset($_FILES[$imgField]) && $_FILES[$imgField]['error'] == 0) {
            $ext = pathinfo($_FILES[$imgField]['name'], PATHINFO_EXTENSION);
            $newName = $imgField . "_" . time() . "." . $ext;
            $target = $imageDir . $newName;
            if (move_uploaded_file($_FILES[$imgField]['tmp_name'], $target)) {
                $data[$imgField] = $target; 
            }
        }
    }

    file_put_contents($jsonFile, json_encode($data, JSON_PRETTY_PRINT));
    $msg = "Website Successfully Updated!";
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Website Admin Panel</title>
    <style>
        body { font-family: Arial, sans-serif; background: #f0f2f5; padding: 20px; margin: 0;}
        .container { max-width: 1000px; margin: 0 auto; background: #fff; padding: 30px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); border-radius: 8px;}
        h1 { color: #0a4d2e; border-bottom: 2px solid #c4a75e; padding-bottom: 15px; display: flex; justify-content: space-between;}
        h1 a { font-size: 14px; background: #0a4d2e; color: #fff; padding: 8px 15px; text-decoration: none; border-radius: 4px; }
        .section-box { border: 1px solid #ddd; padding: 20px; margin-top: 20px; border-radius: 5px; background: #fafafa;}
        .section-box h3 { margin-top: 0; color: #0a4d2e; border-bottom: 1px solid #ddd; padding-bottom: 10px;}
        .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }
        .full { grid-column: span 2; }
        label { font-weight: bold; font-size: 13px; color: #333; display: block; margin-bottom: 5px;}
        input[type="text"], textarea { width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box;}
        input[type="file"] { background: #fff; padding: 5px; border: 1px solid #ccc; width: 100%;}
        .preview { max-height: 60px; margin-top: 5px; border: 1px solid #eee; display: block;}
        .btn { background: #c4a75e; color: #0a4d2e; padding: 15px; border: none; font-size: 16px; font-weight: bold; width: 100%; cursor: pointer; border-radius: 4px; margin-top: 30px; text-transform: uppercase;}
        .btn:hover { background: #b09450; }
        .alert { background: #d4edda; color: #155724; padding: 15px; border-radius: 5px; margin-bottom: 20px; text-align: center; font-weight: bold;}
    </style>
</head>
<body>
<div class="container">
    <h1>Manage Website Content <a href="index.php" target="_blank">View Live Site ⭧</a></h1>
    <?php if($msg) echo "<div class='alert'>$msg</div>"; ?>

    <form method="POST" enctype="multipart/form-data">
        
        <div class="section-box">
            <h3>1. Header & Contact Details</h3>
            <div class="grid">
                <div><label>Phone Number:</label><input type="text" name="phone_no" value="<?= htmlspecialchars($data['phone_no']) ?>"></div>
                <div><label>Logo:</label><input type="file" name="site_logo" accept="image/*"><img src="<?= $data['site_logo'] ?>" class="preview"></div>
            </div>
        </div>

        <div class="section-box">
            <h3>2. Hero Banner & Overview</h3>
            <div class="grid">
                <div class="full"><label>Hero Banner Image:</label><input type="file" name="hero_banner" accept="image/*"><img src="<?= $data['hero_banner'] ?>" class="preview"></div>
                <div class="full"><label>Title:</label><input type="text" name="ov_title" value="<?= htmlspecialchars($data['ov_title']) ?>"></div>
                <div class="full"><label>Description:</label><textarea name="ov_desc" rows="3"><?= htmlspecialchars($data['ov_desc']) ?></textarea></div>
                <div><label>2 BHK Area:</label><input type="text" name="p_2bhk_area" value="<?= htmlspecialchars($data['p_2bhk_area']) ?>"></div>
                <div><label>2 BHK Price:</label><input type="text" name="p_2bhk_price" value="<?= htmlspecialchars($data['p_2bhk_price']) ?>"></div>
                <div><label>3 BHK Area:</label><input type="text" name="p_3bhk_area" value="<?= htmlspecialchars($data['p_3bhk_area']) ?>"></div>
                <div><label>3 BHK Price:</label><input type="text" name="p_3bhk_price" value="<?= htmlspecialchars($data['p_3bhk_price']) ?>"></div>
            </div>
        </div>

        <div class="section-box">
            <h3>3. Project Story & Peaceful Aura</h3>
            <div class="grid">
                <div class="full"><label>Video Section Title:</label><input type="text" name="story_title" value="<?= htmlspecialchars($data['story_title']) ?>"></div>
                <div class="full"><label>Video Section Desc:</label><textarea name="story_desc" rows="2"><?= htmlspecialchars($data['story_desc']) ?></textarea></div>
                <div class="full"><label>Video Thumbnail Image:</label><input type="file" name="story_img" accept="image/*"><img src="<?= $data['story_img'] ?>" class="preview"></div>
                
                <div class="full"><label>Peaceful Section Title:</label><input type="text" name="peace_title" value="<?= htmlspecialchars($data['peace_title']) ?>"></div>
                <div class="full"><label>Peaceful Section Text:</label><textarea name="peace_desc" rows="3"><?= htmlspecialchars($data['peace_desc']) ?></textarea></div>
                <div class="full"><label>Peaceful Section Image:</label><input type="file" name="peace_img" accept="image/*"><img src="<?= $data['peace_img'] ?>" class="preview"></div>
            </div>
        </div>

        <div class="section-box">
            <h3>4. Amenities Section</h3>
            <div class="grid">
                <div class="full"><label>Section Title:</label><input type="text" name="am_title" value="<?= htmlspecialchars($data['am_title']) ?>"></div>
                <div class="full"><label>Section Subtitle:</label><input type="text" name="am_desc" value="<?= htmlspecialchars($data['am_desc']) ?>"></div>
                <div><label>Amenity 1 Image:</label><input type="file" name="am1_img" accept="image/*"><img src="<?= $data['am1_img'] ?>" class="preview"></div>
                <div><label>Amenity 2 Image:</label><input type="file" name="am2_img" accept="image/*"><img src="<?= $data['am2_img'] ?>" class="preview"></div>
                <div><label>Amenity 3 Image:</label><input type="file" name="am3_img" accept="image/*"><img src="<?= $data['am3_img'] ?>" class="preview"></div>
                <div><label>Amenity 4 Image:</label><input type="file" name="am4_img" accept="image/*"><img src="<?= $data['am4_img'] ?>" class="preview"></div>
            </div>
        </div>

        <div class="section-box">
            <h3>5. Connectivity & Comfort</h3>
            <div class="grid">
                <div class="full"><label>Connectivity Title:</label><input type="text" name="conn_title" value="<?= htmlspecialchars($data['conn_title']) ?>"></div>
                <div class="full"><label>Connectivity Subtitle:</label><input type="text" name="conn_desc" value="<?= htmlspecialchars($data['conn_desc']) ?>"></div>
                
                <div class="full"><label>Comfort Courtyard Title:</label><input type="text" name="comf_title" value="<?= htmlspecialchars($data['comf_title']) ?>"></div>
                <div class="full"><label>Comfort Courtyard Desc:</label><textarea name="comf_desc" rows="2"><?= htmlspecialchars($data['comf_desc']) ?></textarea></div>
                <div class="full"><label>Comfort Courtyard Image:</label><input type="file" name="comf_img" accept="image/*"><img src="<?= $data['comf_img'] ?>" class="preview"></div>
            </div>
        </div>

        <div class="section-box">
            <h3>6. Floor Plans & Gallery</h3>
            <div class="grid">
                <div class="full"><label>Floor Plan Title:</label><input type="text" name="fp_title" value="<?= htmlspecialchars($data['fp_title']) ?>"></div>
                <div><label>Floor Plan 1 Image:</label><input type="file" name="fp1_img" accept="image/*"><img src="<?= $data['fp1_img'] ?>" class="preview"></div>
                <div><label>Floor Plan 2 Image:</label><input type="file" name="fp2_img" accept="image/*"><img src="<?= $data['fp2_img'] ?>" class="preview"></div>
                
                <div class="full"><label>Gallery Title:</label><input type="text" name="gal_title" value="<?= htmlspecialchars($data['gal_title']) ?>"></div>
                <div class="full"><label>Gallery Description:</label><textarea name="gal_desc" rows="2"><?= htmlspecialchars($data['gal_desc']) ?></textarea></div>
                <div><label>Gallery 1 Image:</label><input type="file" name="gal1_img" accept="image/*"><img src="<?= $data['gal1_img'] ?>" class="preview"></div>
                <div><label>Gallery 2 Image:</label><input type="file" name="gal2_img" accept="image/*"><img src="<?= $data['gal2_img'] ?>" class="preview"></div>
            </div>
        </div>

        <div class="section-box">
            <h3>7. Why Choose Section</h3>
            <div class="grid">
                <div class="full"><label>Section Title:</label><input type="text" name="why_title" value="<?= htmlspecialchars($data['why_title']) ?>"></div>
                <div class="full"><label>Section Text (Paragraphs):</label><textarea name="why_desc" rows="5"><?= htmlspecialchars($data['why_desc']) ?></textarea></div>
                <div class="full"><label>Google Map Embed URL (Paste only the 'src' link from the iframe code):</label><input type="text" name="google_map" value="<?= htmlspecialchars($data['google_map']) ?>"></div>
            </div>
        </div>

        <button type="submit" class="btn">Update Entire Website</button>
    </form>
</div>
</body>
</html>
