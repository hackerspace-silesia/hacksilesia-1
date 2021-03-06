package com.example.hacksilesia.track;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.*;

@Repository
public interface TrackRepository extends CrudRepository<Track, Long> {

    Track findByLink(String link);
    Track findById(Long id);
    List<Track> findByStartLatitudeLessThanEqualAndStartLatitudeIsGreaterThanEqualAndStartLongitudeIsLessThanEqualAndStartLongitudeGreaterThanEqual(double maxLatitude,
                                                                                                                                                    double minLatitude,
                                                                                                                                                    double maxLongitude,
                                                                                                                                                    double minLongitude);
}
