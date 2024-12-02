package pl.iwonabendig.tasker_backend.comment.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.iwonabendig.tasker_backend.comment.entity.Comment;

public interface CommentRepository extends JpaRepository<Comment, Long> {
}
