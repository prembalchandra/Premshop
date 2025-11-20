import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Rating,
  Paper,
  Tabs,
  Tab,
} from "@mui/material";
import ReplyIcon from "@mui/icons-material/Reply";

function ProductTabspages() {
  const [value, setValue] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState({ name: "", comment: "", rating: 0 });
  const [replyText, setReplyText] = useState({});
  const [replyOpen, setReplyOpen] = useState({});

  const handleTabChange = (e, newValue) => setValue(newValue);

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRatingChange = (e, newValue) => {
    setForm({ ...form, rating: newValue });
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    setReviews([...reviews, { ...form, replies: [] }]);
    setForm({ name: "", comment: "", rating: 0 });
  };

  const toggleReply = (index) => {
    setReplyOpen({ ...replyOpen, [index]: !replyOpen[index] });
  };

  const handleReplyChange = (index, value) => {
    setReplyText({ ...replyText, [index]: value });
  };

  const handleSubmitReply = (index) => {
    const updatedReviews = [...reviews];
    if (replyText[index]) {
      updatedReviews[index].replies.push(replyText[index]);
      setReviews(updatedReviews);
      setReplyText({ ...replyText, [index]: "" });
      setReplyOpen({ ...replyOpen, [index]: false });
    }
  };

  return (
    <Box sx={{ width: "100%", mt: 3 }}>
      <Tabs
        value={value}
        onChange={handleTabChange}
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          "& .MuiTab-root": { textTransform: "none", fontWeight: "bold" },
          "& .Mui-selected": { color: "#9c27b0" },
        }}
      >
        <Tab label="Description" />
        <Tab label="Reviews" />
        <Tab label="Seller Info" />
      </Tabs>

      {/* Description */}
      {value === 0 && (
        <Box sx={{ p: 3 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
            Introduction
          </Typography>
          <Typography variant="body2" sx={{ color: "#555", mb: 2 }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Typography>
        </Box>
      )}

      {value === 1 && (
        <Box sx={{ display: "flex", gap: 4, mt: 2, flexDirection: "column" }}>
          <Box sx={{ flex: 1 }}>
            {reviews.length === 0 && <Typography>No reviews yet.</Typography>}

            {reviews.map((rev, idx) => (
              <Paper key={idx} sx={{ p: 2, mb: 2 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                  {rev.name}
                </Typography>

                <Rating
                  value={rev.rating}
                  readOnly
                  size="small"
                  sx={{ mb: 1 }}
                />

                <Typography variant="body2" sx={{ mb: 1 }}>
                  {rev.comment}
                </Typography>

                {rev.replies.length > 0 &&
                  rev.replies.map((reply, rIdx) => (
                    <Box
                      key={rIdx}
                      sx={{
                        pl: 2,
                        borderLeft: "2px solid #ddd",
                        mb: 1,
                      }}
                    >
                      <Typography variant="body2" color="text.secondary">
                        Reply: {reply}
                      </Typography>
                    </Box>
                  ))}

                <Button
                  startIcon={<ReplyIcon />}
                  size="small"
                  onClick={() => toggleReply(idx)}
                >
                  Reply
                </Button>

                {replyOpen[idx] && (
                  <Box sx={{ mt: 1, display: "flex", gap: 1 }}>
                    <TextField
                      size="small"
                      placeholder="Write a reply..."
                      fullWidth
                      value={replyText[idx] || ""}
                      onChange={(e) => handleReplyChange(idx, e.target.value)}
                    />
                    <Button
                      variant="contained"
                      size="small"
                      onClick={() => handleSubmitReply(idx)}
                    >
                      Send
                    </Button>
                  </Box>
                )}
              </Paper>
            ))}
          </Box>

          <Box>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Add a Review
            </Typography>

            <form onSubmit={handleSubmitReview}>
              <TextField
                label="Your Name"
                name="name"
                value={form.name}
                onChange={handleFormChange}
                fullWidth
                sx={{ mb: 2 }}
              />

              <TextField
                label="Your Comment"
                name="comment"
                value={form.comment}
                onChange={handleFormChange}
                fullWidth
                multiline
                rows={4}
                sx={{ mb: 2 }}
              />

              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Typography sx={{ mr: 1 }}>Rating:</Typography>
                <Rating value={form.rating} onChange={handleRatingChange} />
              </Box>

              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{
                  backgroundColor: "#1800a17d",
                  padding: "8px 12px",
                  textAlign: "center",
                  borderRadius: 1,
                  color: "#fff",
                  marginTop: "10px",
                  fontWeight: 600,
                  fontSize: 14,
                  maxWidth: "150px",
                  cursor: "pointer",
                  "&:hover": { backgroundColor: "#c72277" },
                }}
              >
                Submit Review
              </Button>
            </form>
          </Box>
        </Box>
      )}

      {value === 2 && (
        <Box sx={{ p: 3 }}>
          <Typography variant="body2">Seller: ABC Electronics</Typography>
          <Typography variant="body2">Location: Mumbai, India</Typography>
        </Box>
      )}
    </Box>
  );
}

export default ProductTabspages;
